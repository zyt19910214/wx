@echo off
rem �ṩWindows��nginx���������������رչ���
 
echo ==================begin========================
 
cls 
::ngxin ���ڵ��̷�
set NGINX_PATH=D:
 
::nginx ����Ŀ¼
set NGINX_DIR=D:\wx\wxH\nginx_1.13.6\
color 0a 
TITLE Nginx ���������ǿ��
 
CLS 
 
echo. 
echo. ** Nginx �������  *** 
echo. *** create 2017-09-22 *** 
echo. 
 
:MENU 
 
echo. ***** nginx ����list ****** 
::tasklist|findstr /i "nginx.exe"
tasklist /fi "imagename eq nginx.exe"
 
echo. 
 
    if ERRORLEVEL 1 (
        echo nginx.exe������
    ) else (
        echo nginx.exe����
    )
 
echo. 
::*************************************************************************************************************
echo. 
	echo.  [1] ����Nginx  
	echo.  [2] �ر�Nginx  
	echo.  [3] ����Nginx 
	echo.  [0] �� �� 
echo. 
 
echo.������ѡ������:
set /p ID=
	IF "%id%"=="1" GOTO start 
	IF "%id%"=="2" GOTO stop 
	IF "%id%"=="3" GOTO restart 
	IF "%id%"=="0" EXIT
PAUSE 
 
::*************************************************************************************************************
::����
:start 
	call :startNginx
	GOTO MENU
 
::ֹͣ
:stop 
	call :shutdownNginx
	GOTO MENU
 
::����
:restart 
	call :shutdownNginx
	call :startNginx
	GOTO MENU
 

	
::*************************************************************************************
::�ײ�
::*************************************************************************************
:shutdownNginx
	echo. 
	echo.�ر�Nginx...... 
	taskkill /F /IM nginx.exe > nul
	echo.OK,�ر�����nginx ����
	goto :eof
 
:startNginx
	echo. 
	echo.����Nginx...... 
	IF NOT EXIST "%NGINX_DIR%nginx.exe" (
        echo "%NGINX_DIR%nginx.exe"������
        goto :eof
     )
 
	%NGINX_PATH% 
	cd "%NGINX_DIR%" 
 
	IF EXIST "%NGINX_DIR%nginx.exe" (
		echo "start '' nginx.exe"
		start "" nginx.exe
	)
	echo.OK
	goto :eof
	
 

