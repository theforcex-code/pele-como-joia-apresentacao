@echo off
setlocal
cd /d "%~dp0"
title Pele como Joia - localhost:3000

where node >nul 2>&1
if errorlevel 1 (
  echo.
  echo Node.js nao encontrado neste computador.
  echo Instale a versao LTS em https://nodejs.org e rode este arquivo de novo.
  echo.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Instalando dependencias - leva alguns minutos na primeira vez...
  call npm install
  if errorlevel 1 (
    echo.
    echo O npm install falhou. Veja a mensagem acima.
    pause
    exit /b 1
  )
)

start "" cmd /c "timeout /t 8 >nul & start http://localhost:3000"
echo.
echo Servidor subindo em http://localhost:3000 - deixe esta janela aberta.
echo Para parar: feche a janela ou aperte Ctrl+C.
echo.
call npm run dev
pause
