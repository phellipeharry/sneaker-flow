@echo off
title SneakerFlow - Sistema de Gestao de Calcados
echo ========================================================
echo   Iniciando SneakerFlow - Gestao de Calcados e Despacho
echo ========================================================
echo.
cd /d "%~dp0"
echo Abrindo o navegador em http://localhost:3000...
start http://localhost:3000
echo.
echo Iniciando servidor Node.js...
node server.js
pause

