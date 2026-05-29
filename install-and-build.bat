@echo off
cd /d "%~dp0"
echo Installing dependencies...
call npm install
echo.
echo Running build...
call npm run build
echo.
echo Build completed!
pause
