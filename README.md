# Pgplxbk

This project was generated with NodeJS usando TS.

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:3002/`. The application will automatically reload if you change any of the source files.

## MEAN
* API REST
* ANGULAR 18
* POSTMAN AND TUNDERCLIENT
* NODE 20


## para el Login y Registro de Usuarios
Se utiliza el siguiente url para el Login:http://localhost:3002/auth/login y para el registro de usuario http://localhost:3002/auth/register
* Json de registro
{
   "name": "Edwin",
   "password": "123345678",
   "email": "miguepinchao1992@gmail.com"
}   *

*Json de login 
{
   "email": "miguepinchao1992@gmail.com",
   "password": "123345678"
}*

## para el uso de enpoints externos de PagoPlux
este debe tener el IDTransaccion para realizar la consulta.
se utiliso el siguiente enlace https://apipre.pagoplux.com/intv1/integrations/getTransactionByIdStateResource?idTransaction=626d9095-ecf0-4af4-98ab-c14021d8206f
