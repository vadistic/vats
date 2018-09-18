@echo off
for /f "tokens=*" %%a in (../../../.env) do (
  echo SET %%a >> temp.env.bat
)

CALL temp.env.bat
