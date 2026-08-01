package com.valenteartes.terminal;

import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import okhttp3.*;
import java.io.IOException;

public class NativeBridge {
    private final WebView webView;
    private final OkHttpClient client;
    private static final MediaType JSON_TYPE = MediaType.parse("application/json; charset=utf-8");

    public NativeBridge(WebView webView) {
        this.webView = webView;
        // OkHttp usa Conscrypt automaticamente quando instalado como provider
        this.client = new OkHttpClient.Builder()
            .connectTimeout(15, java.util.concurrent.TimeUnit.SECONDS)
            .readTimeout(15, java.util.concurrent.TimeUnit.SECONDS)
            .build();
    }

    @JavascriptInterface
    public void request(final String method, final String url,
                        final String apiKey, final String bodyJson,
                        final String cbId) {
        new Thread(new Runnable() {
            public void run() { doRequest(method, url, apiKey, bodyJson, cbId); }
        }).start();
    }

    private void doRequest(String method, String url, String apiKey,
                           String bodyJson, String cbId) {
        try {
            boolean hasBody = bodyJson != null && !bodyJson.isEmpty()
                              && !bodyJson.equals("null");

            RequestBody body = hasBody
                ? RequestBody.create(JSON_TYPE, bodyJson)
                : null;

            Request.Builder rb = new Request.Builder()
                .url(url)
                .header("apikey",         apiKey)
                .header("Authorization",  "Bearer " + apiKey)
                .header("Accept",         "application/json");

            if (hasBody) {
                rb.header("Content-Type", "application/json");
                rb.header("Prefer",       "return=minimal");
            }

            RequestBody emptyBody = RequestBody.create(null, new byte[0]);

            if ("GET".equals(method)) {
                rb.get();
            } else if ("POST".equals(method)) {
                rb.post(body != null ? body : emptyBody);
            } else if ("PATCH".equals(method)) {
                rb.patch(body != null ? body : emptyBody);
            } else if ("PUT".equals(method)) {
                rb.put(body != null ? body : emptyBody);
            } else if ("DELETE".equals(method)) {
                rb.delete();
            } else {
                rb.method(method, body);
            }

            Response resp = client.newCall(rb.build()).execute();
            int status = resp.code();
            String respBody = "";
            if (resp.body() != null) {
                respBody = resp.body().string();
                resp.body().close();
            }
            resp.close();
            callback(cbId, status, respBody);

        } catch (Exception e) {
            String msg = e.getMessage();
            if (msg == null) msg = e.getClass().getSimpleName();
            callback(cbId, 0, "{\"message\":\"" + msg.replace("\"","\\\"") + "\"}");
        }
    }

    private void callback(final String cbId, final int status, final String body) {
        final String safe = body
            .replace("\\", "\\\\")
            .replace("'",  "\\'")
            .replace("\n", "\\n")
            .replace("\r", "");
        webView.post(new Runnable() {
            public void run() {
                String js = "javascript:(function(){" +
                    "var f=window['__nb_'+'" + cbId + "'];" +
                    "if(f){delete window['__nb_'+'" + cbId + "'];" +
                    "f(" + status + ",'" + safe + "');}" +
                    "})()";
                webView.loadUrl(js);
            }
        });
    }
}
