@echo off
echo ========================================
echo  Portfolio Performance Optimization
echo ========================================
echo.
echo Clearing cache and rebuilding...
echo.

cd /d C:\Users\HP\Desktop\portfolio

echo Step 1: Removing .next folder...
if exist .next rmdir /s /q .next
echo ✅ Cache cleared!
echo.

echo Step 2: Removing node_modules cache...
if exist node_modules\.cache rmdir /s /q node_modules\.cache
echo ✅ Module cache cleared!
echo.

echo Step 3: Starting development server...
echo.
echo Your portfolio will open at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

npm run dev

pause
