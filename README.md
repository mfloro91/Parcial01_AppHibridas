# Parcial01_AppHibridas
Primer parcial de Aplicaciones Híbridas - API rest con Node.js y MongoDB

## API de Servicios Internos para Hoteles

Esta es una API RESTful desarrollada con **Node.js**, **Express** y **MongoDB**. Permite gestionar los servicios internos de un hotel (room service, limpieza, mantenimiento, etc.) de forma digital, tanto para el personal del hotel como para los huéspedes.

## Funcionalidades principales

- Registro y login de usuarios (superadmin, admin y huéspedes).
- Creación y gestión de órdenes de servicio.
- Filtros de acceso según roles y hotel.
- Visualización de servicios disponibles según el hotel del huésped.
- Búsqueda de hoteles por ciudad o país.
- Actualización de estado de órdenes.
- Middleware de autenticación JWT.

## Tecnologías utilizadas

- Node.js + Express
- MongoDB + Mongoose
- JWT para autenticación
- Dotenv para manejo de variables de entorno
- Bcrypt para encriptación de contraseñas


## Roles y permisos

- Superadmin: Ver todos los hoteles, crear admins, buscar hoteles por ciudad
- Admin y Staff: Ver y modificar órdenes de su hotel, ver servicios de su hotel
- User: Ver servicios de su hotel, hacer órdenes, ver estado de sus pedidos

## Documentación completa de la API
Podés consultar la documentación completa con los endpoints disponibles en el archivo index.html ubicado en la raíz del proyecto. 

## Contacto
Cualquier duda, mi email es mfloro.91@gmail.com
