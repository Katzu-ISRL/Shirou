# Shirou(GameWeb)
MIT Licence.

Requirements.
Python 3.12.10

##########################################

Install Manual:

OPEN VENV

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

cd .\Backend\

python -m venv Venv

.\Venv\Scripts\Activate.ps1

pip install -r ..\Config\requirements.txt

CLOSE VENV

deactivate

Remove-Item -Path .\Venv -Recurse -Force

cd ..\

##########################################

Install Auto(Direct):

.\Config\open_venv.ps1

..\Config\close_venv.ps1

##########################################

Before Save -> Delete Venv | to | git push