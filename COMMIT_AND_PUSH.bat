@echo off
REM Script para commit e push das mudancas SAP CPI
setlocal enabledelayedexpansion

set "PROJECT_DIR=c:\Users\Ediney\Documents\ediiney-premium-portfolio.worktrees\agents-renomear-repositorio-e-melhorias-cv"
set "MAIN_DIR=C:\Users\Ediney\Documents\ediiney-premium-portfolio"

echo.
echo ========================================
echo SAP CPI Portfolio Update
echo ========================================
echo.

echo PASSO 1: Sincronizando branch de trabalho
echo ========================================
cd /d "%PROJECT_DIR%"

echo.
echo Verificando mudancas...
git status --porcelain

echo.
echo Adicionando mudancas...
git add .

echo.
echo ========================================
echo PASSO 2: Commitando mudancas
echo ========================================
git commit -m "Refactor: Update portfolio to SAP CPI focus with detailed projects

Major Changes:
- Changed title: AI Product Engineer ^> Software Engineer
- Updated focus: AI/SaaS ^> SAP Integration Suite specialist
- Expanded about page with professional summary
- Added Technical Skills section with 16 items
- Added Featured Projects section with 4 projects
- Updated client experience with SAP CPI context
- UOL Group: iFlows, API Management, Message Processing
- BRASIF: S/4HANA, SAP ECC, SAP BI
- PagBank: REST/SOAP, Event Mesh, Secure APIs

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
echo PASSO 5: Validando e fazendo push final
echo ========================================
echo.
echo Status do main worktree:
git status --porcelain

echo.
echo Push para main (GitHub)
git push origin main

echo.
echo Ultimos commits:
git log --oneline -5

echo.
echo ========================================
echo ✅ SUCESSO! Portfolio atualizado
echo ========================================
echo.
echo Proximas etapas:
echo 1. Verify no GitHub: https://github.com/Ediiney/ediiney-andrade
echo 2. Deploy automatico com CI/CD (Vercel, Netlify, etc)
echo 3. Verificar site: https://ediiney-andrade.github.io
echo.
pause

