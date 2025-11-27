# Shirou(GameWeb)
MIT Licence.

Requirements.
Python 3.12.10

##########################################

Install Manual:

Python Packages in venv.
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
cd .\Backend\
python -m venv Venv
.\Venv\Scripts\Activate.ps1
pip install -r Django
pip install -r numpy

##########################################

Install Auto(Default):
.\Backend\config_venv.ps1

##########################################

Before Save -> Delete Venv | to | git push