/* 
-Tipos de datos
-Operadores aritmeticos
-Comparadores 
-Operadores logicos
-Variables
-Condiciones
-Bucles (FOR, FOR OF)
-Funciones
-Tipos de datos objeto (objetos y arrays)
Metodos de array mas comunes (push, splice, pop, indexOf, includes, map, filter y find)
Asincronia (Proximamente)
*/




/* Tipos de datos */

/* 
number
string 
null 
undefined
boolean 

arrays
object
function
*/

/* Operadores aritmeticos */


/* 
1) (undefined + (null * NaN)) + '' = String, 'NaN'
(undefined + NaN) + ''
NaN + ''


2) '' + (' ' * 0) = '0'
'' + 0
'0'


3) String(String('')) + NaN = 'NaN'
String('') + NaN 
'' + NaN 
"NaN"

*/


/* 
Comparadores

'' == 0 = True

'' === null = False

null + undefined == NaN = false

NaN === NaN = false
*/


/* 
Operadores logicos
!NaN = true
!String(NaN) = false
console.log('pepe' || 'hola') = 'pepe'
console.log(NaN && true) = NaN
*/


/* const productos = [
    {
        id: 1,
        title: "Tv samsung 32\"",
        price: 300000,
    },
    {
        id: 2,
        title: "Tv samsung 42\"",
        price: 400000,
    },
    {
        id: 3,
        title: "Tv samsung 52\"",
        price: 500000,
    },
    {
        id: 4,
        title: "Tv samsung 65\"",
        price: 1000000,
    }
]
 */
/* 
Crear un programa que muestre por consola a la productos entre 400000 y 950000 
*/

/* for (let i = 0; i < productos.length; i = i + 1) {
    let producto = productos[i]
    if (producto.price >= 400000 && producto.price <= 950000) {
        console.log(producto.title);
    }
}

for(const producto of productos){
    if (producto.price >= 400000 && producto.price <= 950000) {
        console.log(producto.title);
    }
}

productos.forEach(
    (producto) => {
        if (producto.price >= 400000 && producto.price <= 950000) {
            console.log(producto.title);
        }
    }
) */


/* 
Crear una funcion llamada calcular que reciba 2 numeros y un string con el simbolo de operacion, las operaciones disponibles son 
'+' '-' '*' '/' 
y debera retornar el resultado esperado por la operacion
EJ:

calcular(10, 5, '+') // 15
calcular(10, 5, '-') // 5
calcular(10, 5, '*') // 50
calcular(10, 5, '/') // 2
calcular(10, 5, 'hola') // null

ACLARACION: Pueden hacer mas funciones si lo requieren
 */

/* function calcular(num1, num2, operador) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Error: división por cero';
            }
            return num1 / num2;
        default:
            return 'Operador inválido';
    }
} */

/* const OPERATIONS = {
    '+': {
        title: 'sumar',
        action: (a, b) => a + b
    },
    '-': {
        title: 'restar',
        action: (a, b) => a - b
    }
}


function calcular (a, b, operation){
    const operation_selected = OPERATIONS[operation]
    if(!operation_selected){
        return null
    }
    return operation_selected.action(a, b)
} */

/* 
Datos primitivos: Undefined, null, string, number, boolean

Si el dato es primitivo la variable guarda siempre el valor
*/

let nombre = 'pepe'
let nombre_2 = nombre

nombre_2 = 'juan'

console.log(nombre)
console.log(nombre_2)

/* 
Si el dato es objeto la variable guarda la referencia
*/

const persona_1 = {nombre: 'pepe'}

const persona_2 = {...persona_1, edad: 40}

persona_2.nombre = 'juan'

console.log(persona_1.nombre)
console.log(persona_2.nombre)