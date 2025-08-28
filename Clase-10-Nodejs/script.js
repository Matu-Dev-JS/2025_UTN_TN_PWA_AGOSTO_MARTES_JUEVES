/* 
Cualquier cosa referida al DOM o BOM no se puede hacer en NODE.js, al no haber navegador
EJEMPLO:
    - alerts
    - prompt
    - document
    - window
    - localStorage
*/

/* 
Require es una funcion que me permite importar cosas, ya sea librerias nativas, modulos internos o librerias externas
*/
import {sumar} from './math.js'

//El modulo nativo de node.js para manejar el sistema de archivos
//Con esto podriamos crear un archivo de texto plano con x contenido
import filesystem from 'fs'


/* 
Escribir un archivo de texto llamado test que tendra un 'hola' de contenido
*/
/* filesystem.writeFileSync(
    'test.txt', 
    'hola', 
    {
        encoding: 'utf-8'
    }
) */

/* const datos_a_guardar = {
    nombre: 'pepe',
    edad: 49
} */

/* filesystem.writeFileSync(
    'datos.json',
    JSON.stringify(datos_a_guardar),
    {
        encoding: 'utf-8'
    }
) */

let string = filesystem.readFileSync('datos.json', {encoding: 'utf-8'})
const resultado = JSON.parse( string )

console.log( resultado.nombre )



/* 
Crear una lista de productos donde cada producto tenga precio nombre y id. 
Hacer 3 productos almenos
Guardar la lista de productos en un archivo llamado productos.json

*/