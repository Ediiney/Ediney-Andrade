@echo off
REM Script para commit e push para GitHub
setlocal enabledelayedexpansion

set "PROJECT_DIR=c:\Users\Ediney\Documents\ediiney-premium-portfolio.worktrees\agents-renomear-repositorio-e-melhorias-cv"
set "MAIN_DIR=C:\Users\Ediney\Documents\ediiney-premium-portfolio"

echo.
echo ========================================
echo PASSO 1: Sincronizando branch de trabalho
echo ========================================
cd /d "%PROJECT_DIR%"

echo.
echo Verificando status...
git status

echo.
echo Adicionando mudancas...
git add .

echo.
echo Verificando mudancas a serem commitadas...
git status

echo.
echo ========================================
echo PASSO 2: Commitando mudancas
echo ========================================
git commit -m "Feat: Add clients section with contextual icons and SAP CPI focus

- Added Clients & Companies section with UOL, BRASIF, and PagBank
- Replaced generic blue placeholders with contextual lucide-react icons
- Expanded about page with detailed client experience and projects
- Updated PagBank context to SAP CPI Integration focus (API integration, cloud orchestration, middleware)
- Updated package.json name to ediiney-andrade and added lucide-react dependency
- BRASIF projects include SAP CPI, SAP ECC, and SAP Business Intelligence
- UOL includes Web Development, Integration Systems, and Full-Stack Solutions

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

if %errorlevel% neq 0 (
    echo Erro no commit
    pause
    exit /b 1
)

echo.
echo ========================================
echo PASSO 3: Fazendo push para remote
echo ========================================
git fetch origin
echo.
git push origin HEAD

if %errorlevel% neq 0 (
    echo Erro no push
    pause
    exit /b 1
)

echo.
echo ========================================
echo PASSO 4: Fazendo merge no main worktree
echo ========================================
cd /d "%MAIN_DIR%"

echo.
echo Atualizando main worktree...
git fetch origin

REM Obter nome da branch de trabalho
for /f %%B in ('cd /d "%PROJECT_DIR%" ^& git rev-parse --abbrev-ref HEAD') do set "TOPIC_BRANCH=%%B"

echo.
echo Fazendo merge de: %TOPIC_BRANCH%
git merge %TOPIC_BRANCH%

if %errorlevel% neq 0 (
    echo Aviso: Pode haver conflitos de merge
    git status
    pause
    exit /b 1
)

echo.
echo ========================================
echo PASSO 5: Validando resultado
echo ========================================
echo.
echo Status do main worktree:
git status --porcelain

echo.
echo Ultimos commits:
git log --oneline -5

echo.
echo ========================================
echo ✅ SUCESSO! Mudancas aplicadas e enviadas para GitHub
echo ========================================
echo.
echo Proximas etapas (opcional):
echo 1. Push main branch se necessario: git push origin main
echo 2. Verificar no GitHub: https://github.com/Ediiney/ediiney-andrade
echo 3. Fazer deploy se usar CI/CD (Vercel, Netlify, etc)
echo.
pause
