call npm run build
set location="..\step-js.web.app"
call xcopy build\*.* %location%\public\ /E /H /C /I /Y
