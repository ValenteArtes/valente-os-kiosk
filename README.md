# Valente OS Terminal — APK Kiosk

APK que transforma os tablets MEC em terminais do Valente OS.

## O que faz

- Abre o Valente OS terminal **automaticamente** quando o tablet liga
- Vira a **tela inicial** do tablet (pressionar Home volta para o terminal)
- Bloqueia o botão Voltar (colaborador não sai acidentalmente)
- Mantém a tela ligada
- Carrega o arquivo local se disponível, senão usa a URL na nuvem

## Como gerar o APK (GitHub Actions — gratuito)

1. Crie uma conta em https://github.com (grátis)
2. Clique em "New repository" → nome: `valente-os-kiosk` → Create
3. Faça upload de todos estes arquivos (arraste para o GitHub)
4. Vá em **Actions** → clique em "Build APK" → "Run workflow"
5. Aguarde ~5 minutos → clique no build → baixe o artefato **ValenteOS-Terminal-APK**
6. Extraia o ZIP → você terá o arquivo `.apk`

## Como instalar nos tablets via ADB

Com os tablets conectados via USB:

```
adb install -r ValenteOS-Terminal.apk
```

Para todos de uma vez, use o arquivo `INSTALAR_APK_TABLETS.bat` incluído.

## Primeira configuração no tablet

Na primeira vez que instalar, o Android pergunta:
> "Qual aplicativo deseja usar como Tela Inicial?"

Selecione **Valente OS** e marque **"Sempre"**.

A partir daí, toda vez que o tablet ligar, já entra direto.
