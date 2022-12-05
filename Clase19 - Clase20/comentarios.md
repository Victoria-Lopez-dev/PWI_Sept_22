en el repositorio no cargamos los node_modules ya que tenemos el package.json que tiene todo el "resumen" de que modulos necesitas (de que paquetes usa).

Cuando accedo a ese repositorio ( el hosting o nosotros), se tiene que ejecutar el comando 
## npm install
que lo que hace es instalar todos los modulos que figuran en el package.json y luego una vez finalizada la carga ejecuta el comando 
## npm run start 
para reproducir el sitio.
