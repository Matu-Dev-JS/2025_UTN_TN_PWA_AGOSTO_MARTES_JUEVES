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

/* let string = filesystem.readFileSync('datos.json', {encoding: 'utf-8'})
const resultado = JSON.parse( string )

console.log( resultado.nombre )


 */
/* 
Crear una lista de productos donde cada producto tenga precio nombre y id. 
Hacer 3 productos almenos
Guardar la lista de productos en un archivo llamado productos.json

*/
/* 
const lista_productos = [
    {
        precio: 100,
        nombre: 'TV',
        id: 1
    },
    {
        precio: 27,
        nombre: 'luces led',
        id: 2
    },
    {
        precio: 55,
        nombre: 'parlante',
        id: 3
    }
]

filesystem.writeFileSync(
    'productos.json',
    JSON.stringify(lista_productos),
    {
        encoding: 'utf-8'
    }
)

let texto = filesystem.readFileSync(
    'productos.json',
    {
        encoding: 'utf-8'
    }
)

const productos_guardados = JSON.parse( texto )

console.log(productos_guardados) */


/* 
La asincronia nos permite optimizar la cantidad de outputs de un programa mediante el uso eficiente de recursos.
*/
/* 
Async / Await
Nos permite manejar asincronia con JS
*/

async function crearArchivoJSON( file_name, file_content ){
    await filesystem.promises.writeFile(file_name + '.json', JSON.stringify(file_content), {encoding: 'utf-8'})
    console.log('El archivo ' + file_name + '.json ' + 'se creo correctamente')
}
/* 
Crear 2 archivos:
En el primero deben guardar un numero A
En el segundo deben guardar un numero B
Leer ambos archivos y sumar el resultado de ambos numeros.
Guardar el resultado en archivo llamado resultado.txt
*/