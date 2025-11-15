@echo off
echo ================================
echo   Portfolio Build and Test
echo ================================
echo.

echo [1/4] Cleaning previous builds...
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out
echo ✓ Cleaned

echo.
echo [2/4] Installing dependencies...
call npm install
if errorlevel 1 (
    echo ✗ Installation failed!
    pause
    exit /b 1
)
echo ✓ Dependencies installed

echo.
echo [3/4] Building project...
call npm run build
if errorlevel 1 (
    echo ✗ Build failed!
    pause
    exit /b 1
)
echo ✓ Build successful

echo.
echo [4/4] Starting production server...
echo.
echo ================================
echo   Your portfolio is ready!
echo   Opening at: http://localhost:3000
echo ================================
echo.
echo Press Ctrl+C to stop the server
echo.

start http://localhost:3000
call npm start

pause
