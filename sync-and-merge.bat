@echo off
setlocal enabledelayedexpansion

REM Define the paths
set "CURRENT_WORKTREE=c:\Users\Ediney\Documents\ediiney-premium-portfolio.worktrees\agents-renomear-repositorio-e-melhorias-cv"
set "MAIN_WORKTREE=C:\Users\Ediney\Documents\ediiney-premium-portfolio"

echo.
echo ========================================
echo Checking for uncommitted changes...
echo ========================================
cd /d "%CURRENT_WORKTREE%"
git status --porcelain
if %errorlevel% neq 0 (
    echo Error checking git status
    pause
    exit /b 1
)

echo.
echo ========================================
echo Current branch info
echo ========================================
git branch -v
git rev-parse --abbrev-ref HEAD

echo.
echo ========================================
echo Fetching upstream...
echo ========================================
git fetch origin

echo.
echo ========================================
echo Checking ahead/behind counts...
echo ========================================
for /f "tokens=1,2" %%A in ('git rev-list --left-right --count HEAD...@{u} 2^>nul') do (
    set "AHEAD=%%A"
    set "BEHIND=%%B"
)
echo Ahead: %AHEAD%, Behind: %BEHIND%

echo.
echo ========================================
echo Syncing (pushing to remote)...
echo ========================================
git push

echo.
echo ========================================
echo Merging to main worktree...
echo ========================================
cd /d "%MAIN_WORKTREE%"
for /f %%B in ('cd /d "%CURRENT_WORKTREE%" ^& git rev-parse --abbrev-ref HEAD') do set "TOPIC_BRANCH=%%B"

echo Merging branch: %TOPIC_BRANCH%
git merge %TOPIC_BRANCH%

if %errorlevel% neq 0 (
    echo Merge conflicts detected!
    git status
    pause
    exit /b 1
)

echo.
echo ========================================
echo Validating merge...
echo ========================================
git status --porcelain
git rev-parse --abbrev-ref HEAD

echo.
echo ========================================
echo Merge completed successfully!
echo ========================================
pause
