package com.valenteartes.terminal;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

// Abre o terminal automaticamente após o tablet ligar
public class BootReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        if (Intent.ACTION_BOOT_COMPLETED.equals(intent.getAction())) {
            Intent launch = new Intent(context, MainActivity.class);
            launch.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            context.startActivity(launch);
        }
    }
}
