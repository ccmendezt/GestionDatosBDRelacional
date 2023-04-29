# GestionDatosBDRelacional
Proyecto de gestión de datos de base de datos relacional proporcionada por ESRI hecho en NestJS utilizando TypeORM y PostgreSQL<br />
__Realizado por:__ _Cristian Camilo Méndez Trujillo_
## Instrucciones de Ejecución
1. Crear la base de datos en PostgreSQL
2. Descargar y descomprimir el .zip del proyecto
3. Abrir el proyecto en _Visual Studio Code_
4. Abrir una nueva terminal en la ruta del proyecto
5. Ejectuar el comando **npm install** para instalar los paquetes y dependencias necesarias para ejecutar el proyecto
6. Luego de instalar todos los paquetes, ejecutar el comando **npm run start:dev**
7. ¡Listo! El proyecto ya estará desplegado y ahora solo falta abrir la dirección que indica la consola para ver el proyecto desplegado en el localhost.
8. Instalar un programa que permita hacer las peticiones a la API. Se recomienda instalar la extensión **ThunderClient** en VSCode aunque también se puede utilizar un programa de escritorio como **Postman**.

## Instrucciones de peticiones a la API
Inicialmente se debe tener en cuenta que manejé 4 tipos de métodos dentro de la API:<br />
1. **Post**: Para crear un recurso del servidor.
2. **Get**: Para obtener un recurso del servidor.
3. **Patch**: Para actualizar un recurso del servidor.
4. **Delete**: Para eliminar un recurso del servidor.
Ya teniendo claro lo anterior, haré un ejemplo de inserción, obtención, actualización y eliminación de una empresa utilizando ThunderClient en VSCode.<br />

- **Para la inserción de una nueva empresa:**<br />
Utilizamos el metodo Post y en el body pasamos el parametro name en formato JSON como se aprecia en la siguiente imagen:<br />

_Nota:_ Se crearon dos empresas. Una fue **Meta** y la otra fue **Amazon** con id's 1 y 2 respectivamente.

- **Para obtener las empresa registradas en la base de datos:**<br />
Utilizamos el método Get con la URL especificada en la siguiente imagen:<br />

- **Para obtener una empresa específica por su id:**<br />
Utilizamos el método Get con la URL especificada añadiendole un Slash seguido del id que queremos obtener:<br />

- **Para actualizar una empresa:**<br />
Utilizamos el método Patch con la URL especificada añadiendole un Slash seguido del id que queremos obtener:<br />

- **Para eliminar una empresa:**<br />
Utilizamos el método Delete con la URL especificada añadiendole un Slash seguido del id que queremos obtener:<br />

- **Caso de empresa no encontrada:**<br />
Cuando intentamos buscar, actualizar o eliminar una empresa que no existe arroja el siguiente mensaje manejado por HttpException y HttpStatus:<br />

Por último, todas las rutas para hacer las peticiones son las siguientes: <br />
- **Inicio**: http://localhost:3000/
- **Enterprise**: http://localhost:3000/enterprise
- **Project**: http://localhost:3000/project
- **Users**: http://localhost:3000/users
- **User-Project**: http://localhost:3000/userproject

### Notas Finales
- Configurar correctamente las variables de entorno según sea su caso en el archivo .env que se encuentra en el directorio raiz. (Recuerde que se puede modificar el host, puerto, usuario, contraseña y nombre de base de datos).
- La base de datos que utilicé tiene el nombre: _gestiondb_
- El modelo relacional indicaba que las claves primarias para cada entidad son de tipo: _uuid_ pero decidí manejarlas como smallserial para mayor comodidad al momento de hacer las peticiones a la API Rest.

¡Gracias!
