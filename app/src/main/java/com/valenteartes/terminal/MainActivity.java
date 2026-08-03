package com.valenteartes.terminal;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.ComponentName;
import android.content.DialogInterface;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.os.Handler;
import android.view.KeyEvent;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.*;
import android.graphics.Color;
import java.io.File;
import java.security.Security;

public class MainActivity extends Activity {

    private WebView webView;
    // Prioridade: sdcard (atualizações OTA) → asset (sempre disponível) → remoto (fallback)
    private static final String SDCARD_URL = "file:///sdcard/ValenteOS_Terminal.html";
    private static final String ASSET_URL  = "file:///android_asset/ValenteOS_Terminal.html";
    private static final String REMOTE_URL = "https://calculadora-3d-valente-artes.netlify.app/ValenteOS_Terminal.html";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Conscrypt: habilita TLS 1.2 no Android 4.x (para NativeBridge/OkHttp)
        try {
            org.conscrypt.Conscrypt.checkAvailability();
            Security.insertProviderAt(org.conscrypt.Conscrypt.newProvider(), 1);
        } catch (Throwable t) { /* silencioso */ }

        // Registrar como launcher padrão
        try {
            PackageManager pm = getPackageManager();
            ComponentName self = new ComponentName(this, MainActivity.class);
            String[] outrosLaunchers = {
                "com.android.launcher/com.android.launcher2.Launcher",
                "br.com.positivo.appstore/.Home"
            };
            for (String comp : outrosLaunchers) {
                try {
                    pm.setComponentEnabledSetting(
                        ComponentName.unflattenFromString(comp),
                        PackageManager.COMPONENT_ENABLED_STATE_DISABLED,
                        PackageManager.DONT_KILL_APP);
                } catch (Throwable ignore) {}
            }
            IntentFilter filtro = new IntentFilter(android.content.Intent.ACTION_MAIN);
            filtro.addCategory(android.content.Intent.CATEGORY_HOME);
            filtro.addCategory(android.content.Intent.CATEGORY_DEFAULT);
            ComponentName[] set = { self };
            pm.addPreferredActivity(filtro, IntentFilter.MATCH_CATEGORY_EMPTY, set, self);
        } catch (Throwable t) { /* silencioso */ }

        requestWindowFeature(Window.FEATURE_NO_TITLE);
        getWindow().setFlags(
            WindowManager.LayoutParams.FLAG_FULLSCREEN,
            WindowManager.LayoutParams.FLAG_FULLSCREEN);
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

        webView.addJavascriptInterface(new NativeBridge(webView), "NativeBridge");

        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onJsAlert(WebView v, String url, String msg, final JsResult r) {
                new AlertDialog.Builder(MainActivity.this)
                    .setMessage(msg)
                    .setPositiveButton("OK", new DialogInterface.OnClickListener() {
                        public void onClick(DialogInterface d, int w) { r.confirm(); }
                    })
                    .setCancelable(false).show();
                return true;
            }
            @Override
            public boolean onJsConfirm(WebView v, String url, String msg, final JsResult r) {
                new AlertDialog.Builder(MainActivity.this)
                    .setMessage(msg)
                    .setPositiveButton("Confirmar", new DialogInterface.OnClickListener() {
                        public void onClick(DialogInterface d, int w) { r.confirm(); }
                    })
                    .setNegativeButton("Cancelar", new DialogInterface.OnClickListener() {
                        public void onClick(DialogInterface d, int w) { r.cancel(); }
                    })
                    .setCancelable(false).show();
                return true;
            }
        });

        webView.setWebViewClient(new WebViewClient() {
            private boolean triedSdcard = false;
            private boolean triedAsset  = false;

            @Override
            public void onReceivedError(WebView view, int code, String desc, String url) {
                if (url == null) return;
                if (url.contains("sdcard") && !triedAsset) {
                    // sdcard falhou (nao montado ainda?) → usar asset embutido no APK
                    triedAsset = true;
                    view.loadUrl(ASSET_URL);
                } else if (url.contains("android_asset")) {
                    // asset falhou (impossivel, mas por seguranca) → remoto
                    view.loadUrl(REMOTE_URL);
                } else {
                    // URL remota falhou → tentar asset novamente apos 10s
                    new Handler().postDelayed(new Runnable() {
                        public void run() { webView.loadUrl(ASSET_URL); }
                    }, 10000);
                }
            }
        });

        setContentView(webView);

        // Verificar sdcard primeiro (permite atualizacoes sem reinstalar APK)
        // Se nao existir, usa asset embutido (sempre funciona no boot)
        File sdcardFile = new File("/sdcard/ValenteOS_Terminal.html");
        File mntFile    = new File("/mnt/sdcard/ValenteOS_Terminal.html");
        if (sdcardFile.exists() || mntFile.exists()) {
            webView.loadUrl(SDCARD_URL);
        } else {
            webView.loadUrl(ASSET_URL);
        }
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_BACK || keyCode == KeyEvent.KEYCODE_MENU) return true;
        return super.onKeyDown(keyCode, event);
    }

    @Override protected void onResume() { super.onResume(); webView.onResume(); }
    @Override protected void onPause()  { super.onPause();  webView.onPause();  }
}