@echo off
setlocal enabledelayedexpansion

:: 检查 Token 是否设置
if "%Nilotica_GH_TOKEN%"=="" (
    echo Error: Nilotica_GH_TOKEN environment variable is not set
    pause
    exit /b 1
)

:: 切换到上级目录
cd ..
:: 添加安全目录 safe.directory
set "directory=%CD%"
git config --global --add safe.directory "!directory!"

:: 创建临时目录
if exist temp rmdir /s /q temp
mkdir temp

:: 设置 GitHub URL
set GITHUB_URL=https://oauth:%Nilotica_GH_TOKEN%@github.com/Nilotica/nilotica.github.io.git

:: 克隆仓库
echo Testing GitHub access...
git clone %GITHUB_URL% temp
if errorlevel 1 (
    echo Cloning failed, please check:
    echo 1. GitHub token is valid and has correct permissions
    echo 2. You have access to the repository
    echo 3. Network connection is stable
    pause
    exit /b 1
)

:: 删除临时目录中的所有文件
cd temp
del /s /q *
cd ..

:: 移动构建文件
xcopy /s /e /y "NiloticaDocs\src\.vitepress\dist\*" "temp\"

:: 进入临时目录
cd temp

:: 初始化 Git 仓库
git init
git config --global init.defaultBranch main
git remote add origin %GITHUB_URL%
git branch -M main

:: 设置 Git 用户信息
git config --global user.name "Donny"
git config --global user.email "donnymoving@gmail.com"

:: 提交并推送
git add *
git commit -m "docs: auto update"
git push --set-upstream origin main -f

:: 清理临时目录
cd ..
rmdir /s /q temp

echo Deployment Completed!
exit 