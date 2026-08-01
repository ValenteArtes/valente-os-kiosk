package com.valenteartes.terminal;

import android.app.Activity;
import android.os.Bundle;
import android.os.Handler;
import android.view.KeyEvent;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.graphics.Color;
import java.io.File;

public class MainActivity extends Activity {

    private WebView webView;
    private static final String LOCAL_URL  = "file:///sdcard/ValenteOS_Terminal.html";
    private static final String REMOTE_URL = "https://calculadora-3d-valente-artes.netlify.app/ValenteOS_Terminal.html";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Tela cheia — sem barra de título
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        getWindow().setFlags(
            WindowManager.LayoutParams.FLAG_FULLSCREEN,
            WindowManager.LayoutParams.FLAG_FULLSCREEN
        );
        // Mantém a tela ligada enquanto o app está aberto
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);

        webView = new WebView(this);
        webView.setBackgroundColor(Color.parseColor("#0f172a"));

        WebSettings s = webView.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setAllowFileAccessFromFileURLs(true);
        s.setAllowUniversalAccessFromFileURLs(true);
        s.setCacheMode(WebSettings.LOAD_DEFAULT);
        s.setLoadsImagesAutomatically(true);

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onReceivedError(WebView view, int code, String desc, String url) {
                if (url != null && url.startsWith("file://")) {
                    // Arquivo local não encontrado → usar URL remota
                    view.loadUrl(REMOTE_URL);
                } else {
                    // Sem internet → tentar de novo em 8 segundos
                    new Handler().postDelayed(new Runnable() {
                        public void run() { webView.reload(); }
                    }, 8000);
                }
            }
        });

        setContentView(webView);

        // Prioridade: arquivo local (offline-friendly) → URL remota
        File f = new File("/sdcard/ValenteOS_Terminal.html");
        webView.loadUrl(f.exists() ? LOCAL_URL : REMOTE_URL);
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        // Bloquear Voltar e Menu — colaborador não pode sair acidentalmente
        if (keyCode == KeyEvent.KEYCODE_BACK || keyCode == KeyEvent.KEYCODE_MENU) {
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    @Override protected void onResume() { super.onResume(); webView.onResume(); }
    @Override protected void onPause()  { super.onPause();  webView.onPause();  }
}
