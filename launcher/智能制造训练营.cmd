@echo off
title 智能制造训练营
set "PROJECT_ROOT=%~dp0.."
cd /d "%PROJECT_ROOT%"
start "" "http://localhost:5173/"
npm run dev -- --port 5173
