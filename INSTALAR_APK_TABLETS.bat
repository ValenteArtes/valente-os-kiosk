@echo off
setlocal enabledelayedexpansion

echo.
echo  ============================================================
echo   VALENTE OS — Instalando APK em todos os tablets
echo  ============================================================
echo.

set "APK=%~dp0ValenteOS-Terminal.apk"

if not exist "%APK%" (
    echo  ERRO: ValenteOS-Terminal.apk nao encontrado nesta pasta!
    pause & exit /b 1
)

echo  Tablets conectados:
adb devices
echo.

set COUNT=0
for /f "skip=1 tokens=1,2" %%A in ('adb devices') do (
    if "%%B"=="device" (
        set /a COUNT+=1
        echo  [!COUNT!] Instalando em %%A ...
        adb -s %%A install -r "%APK%"
        echo  [!COUNT!] Concluido.
        echo.
    )
)

echo  ============================================================
echo   !COUNT! tablet(s) com Valente OS instalado!
echo.
echo   Proximos passos em cada tablet:
echo   1. Pressione o botao Home
echo   2. Selecione "Valente OS" como tela inicial
echo   3. Marque "Sempre"
echo   Pronto! Na proxima inicializacao ja entra direto.
echo  ============================================================
echo.
pause
