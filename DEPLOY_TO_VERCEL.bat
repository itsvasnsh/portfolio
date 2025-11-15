@echo off
echo ================================
echo   Portfolio Quick Deploy
echo ================================
echo.

echo This script will help you deploy to Vercel
echo.
echo Prerequisites:
echo  - Git installed
echo  - Vercel CLI installed (npm i -g vercel)
echo  - GitHub repository created
echo.
pause

echo.
echo [1/5] Checking Vercel CLI...
where vercel >nul 2>nul
if errorlevel 1 (
    echo ✗ Vercel CLI not found!
    echo.
    echo Installing Vercel CLI...
    call npm install -g vercel
    if errorlevel 1 (
        echo ✗ Failed to install Vercel CLI
        echo Please run: npm install -g vercel
        pause
        exit /b 1
    )
)
echo ✓ Vercel CLI found

echo.
echo [2/5] Building project...
call npm run build
if errorlevel 1 (
    echo ✗ Build failed! Please fix errors and try again.
    pause
    exit /b 1
)
echo ✓ Build successful

echo.
echo [3/5] Git status...
git status
if errorlevel 1 (
    echo.
    echo ✗ Git not initialized!
    echo Run these commands:
    echo   git init
    echo   git add .
    echo   git commit -m "Initial commit"
    echo   git remote add origin YOUR_REPO_URL
    echo   git push -u origin main
    pause
    exit /b 1
)

echo.
echo [4/5] Committing changes...
git add .
git commit -m "Ready for deployment"
git push
if errorlevel 1 (
    echo ⚠ Push failed - you may need to set up remote first
    echo This is OK if it's your first deployment
)

echo.
echo [5/5] Deploying to Vercel...
echo.
echo ================================
echo   Starting Vercel deployment
echo ================================
echo.

vercel --prod

echo.
echo ================================
echo   Deployment Complete! 🎉
echo ================================
echo.
echo Your portfolio is now live!
echo Check your Vercel dashboard for the URL
echo.

pause
