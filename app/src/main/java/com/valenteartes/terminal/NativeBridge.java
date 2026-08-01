package com.valenteartes.terminal;

import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import java.io.*;
import java.net.*;
import javax.net.ssl.*;

public class NativeBridge {
    private final WebView webView;

    public NativeBridge(WebView webView) {
        this.webView = webView;
    }

    @JavascriptInterface
    public void request(final String method, final String url,
                        final String apiKey,  final String bodyJson,
                        final String cbId) {
        new Thread(new Runnable() {
            public void run() {
                final int[] statusHolder = {0};
                final String result = doRequest(method, url, apiKey, bodyJson, statusHolder);
                final int status = statusHolder[0];

                // Escapar para JS (single-quoted string)
                final String safe = result
                    .replace("\\", "\\\\")
                    .replace("'",  "\\'")
                    .replace("\n", "\\n")
                    .replace("\r", "");

                webView.post(new Runnable() {
                    public void run() {
                        String js = "javascript:(function(){" +
                            "var f=window['__nb_'+'" + cbId + "'];" +
                            "if(f){delete window['__nb_'+'" + cbId + "'];" +
                            "f(" + status + ",'" + safe + "');" +
                            "}})()";
                        webView.loadUrl(js);
                    }
                });
            }
        }).start();
    }

    private String doRequest(String method, String url, String apiKey,
                             String bodyJson, int[] statusHolder) {
        HttpURLConnection conn = null;
        try {
            // Ativar TLS 1.2 explicitamente (necessário no Android 4.x)
            SSLContext ctx;
            try { ctx = SSLContext.getInstance("TLSv1.2"); }
            catch (Exception e) { ctx = SSLContext.getInstance("TLS"); }
            ctx.init(null, null, null);

            URL u = new URL(url);
            conn = (HttpURLConnection) u.openConnection();
            if (conn instanceof HttpsURLConnection) {
                ((HttpsURLConnection) conn).setSSLSocketFactory(ctx.getSocketFactory());
            }
            conn.setRequestMethod(method);
            conn.setConnectTimeout(15000);
            conn.setReadTimeout(15000);
            conn.setRequestProperty("apikey",        apiKey);
            conn.setRequestProperty("Authorization", "Bearer " + apiKey);
            conn.setRequestProperty("Accept",        "application/json");

            if (bodyJson != null && !bodyJson.isEmpty() && !bodyJson.equals("null")) {
                conn.setDoOutput(true);
                conn.setRequestProperty("Content-Type", "application/json");
                conn.setRequestProperty("Prefer",       "return=minimal");
                OutputStream os = conn.getOutputStream();
                os.write(bodyJson.getBytes("UTF-8"));
                os.close();
            }

            int status = conn.getResponseCode();
            statusHolder[0] = status;
            InputStream is = (status >= 200 && status < 300)
                ? conn.getInputStream() : conn.getErrorStream();
            if (is == null) return "";
            BufferedReader br = new BufferedReader(new InputStreamReader(is, "UTF-8"));
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = br.readLine()) != null) sb.append(line);
            br.close();
            return sb.toString();
        } catch (Exception e) {
            statusHolder[0] = 0;
            return "{\"message\":\"" + e.getMessage() + "\"}";
        } finally {
            if (conn != null) conn.disconnect();
        }
    }
}
