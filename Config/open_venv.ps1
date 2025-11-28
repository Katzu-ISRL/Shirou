Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
cd .\Backend\
python -m venv Venv
.\Venv\Scripts\Activate.ps1
pip install -r ..\Config\requirements.txt