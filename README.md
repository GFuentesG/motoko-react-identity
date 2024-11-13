# `Autenticacion con identity`

Proyecto para validar la autenticacion con Internet Identity en un ambiente de pruebas


## Corriendo localmente

Si tu quieres correr el programa deberas ejecutar los siguientes pasos luego de clonar el repositorio:


```bash
# Ingresando a la carpeta
cd motoko-react-identity
```

```bash
# Iniciando el ambiente de pruebas local
dfx start --background --clean

# Instala tus modulos
npm install

# Despliega tus canister y genera tus interfaces
dfx deploy

# Instala tus dependencias
dfx generate
```
Si tu quieres desplegar tu intenet_identity localmente, debes: 

```bash
# Agregar en el archivo .env:
# VITE_INTERNET_COMPUTER_PROVIDER='http://be2us-64aaa-aaaaa-qaabq-cai.localhost:4943/'
# y luego ejecutar:
dfx deploy frontend
```

Una vez que tu completes, tu aplicacion estara disponible en: `http://localhost:4943?canisterId={asset_canister_id}`.

Si necesita hacer cambios de desarrollo en el frontend puede correr el siguiente comando:

```bash
npm start
```

