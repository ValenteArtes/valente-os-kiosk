package com.valenteartes.terminal;

import android.app.Activity;
import android.speech.tts.TextToSpeech;
import android.os.Handler;
import android.os.Looper;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import java.util.HashMap;
import java.util.Locale;
import org.json.JSONObject;

/** Leitura local por trechos, usando as APIs antigas disponíveis no Android 4. */
public final class LessonVoice implements TextToSpeech.OnInitListener {
    private final Activity activity;
    private final WebView webView;
    private final Handler main = new Handler(Looper.getMainLooper());
    private TextToSpeech engine;
    private volatile String state = "initializing";
    private volatile boolean closed;
    private String currentToken;

    public LessonVoice(Activity activity, WebView webView) {
        this.activity = activity;
        this.webView = webView;
        try { engine = new TextToSpeech(activity.getApplicationContext(), this); }
        catch (RuntimeException error) { state = "unavailable"; }
    }

    @Override public void onInit(final int result) {
        main.post(new Runnable() {
            @Override public void run() {
                if (closed || engine == null) return;
                if (result != TextToSpeech.SUCCESS) { state = "unavailable"; return; }
                int language = engine.setLanguage(new Locale("pt", "BR"));
                if (language == TextToSpeech.LANG_MISSING_DATA || language == TextToSpeech.LANG_NOT_SUPPORTED) {
                    state = "missing-language";
                    return;
                }
                engine.setSpeechRate(0.9f);
                engine.setOnUtteranceCompletedListener(new TextToSpeech.OnUtteranceCompletedListener() {
                    @Override public void onUtteranceCompleted(final String token) {
                        activity.runOnUiThread(new Runnable() {
                            @Override public void run() {
                                if (!closed && token.equals(currentToken)) {
                                    currentToken = null;
                                    notifyPage(token, "done");
                                }
                            }
                        });
                    }
                });
                state = "ready";
            }
        });
    }

    @JavascriptInterface public String status() { return closed ? "unavailable" : state; }

    @JavascriptInterface public void speak(final String text, final String token) {
        if (text == null || token == null || text.length() > 4000 || !token.matches("[a-zA-Z0-9_-]{1,64}")) return;
        activity.runOnUiThread(new Runnable() {
            @Override public void run() {
                if (closed || engine == null || !"ready".equals(state)) { notifyPage(token, state); return; }
                currentToken = token;
                HashMap<String, String> params = new HashMap<String, String>();
                params.put(TextToSpeech.Engine.KEY_PARAM_UTTERANCE_ID, token);
                int result = engine.speak(text, TextToSpeech.QUEUE_FLUSH, params);
                if (result == TextToSpeech.ERROR) { currentToken = null; notifyPage(token, "error"); }
            }
        });
    }

    @JavascriptInterface public void stop() {
        activity.runOnUiThread(new Runnable() {
            @Override public void run() { stopOnUiThread(); }
        });
    }

    private void stopOnUiThread() {
        currentToken = null;
        if (engine != null && !closed) engine.stop();
    }

    public void shutdown() {
        stopOnUiThread();
        closed = true;
        state = "unavailable";
        if (engine != null) { engine.shutdown(); engine = null; }
    }

    private void notifyPage(String token, String event) {
        if (closed) return;
        webView.loadUrl("javascript:(function(){if(typeof window.ValenteNativeVoiceEvent==='function'){window.ValenteNativeVoiceEvent("
                + JSONObject.quote(token) + "," + JSONObject.quote(event) + ");}})()");
    }
}
