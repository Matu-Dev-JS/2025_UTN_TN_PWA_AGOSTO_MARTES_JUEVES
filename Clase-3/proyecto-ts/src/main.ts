let saludo: string = 'Hola pepe'

const PI: number = 3.14

console.log(saludo)
console.log(PI)

let valor_random: any = null
console.log(valor_random)

function sumar(a: number, b: number): number {
  return a + b
}

function saludar(mensaje: string): void {
  console.log(mensaje)
}

interface PersonaInterface {
  nombre: string,
  apellido: string,
  edad: number | null
}

const persona_1: PersonaInterface = {
  nombre: 'pepe',
  apellido: 'suarez',
  edad: null
}

const persona_2: PersonaInterface = {
  nombre: 'pedrito',
  apellido: 'Fajen',
  edad: null
}

persona_1.edad

/* 
Pais:
nombre
cantidad_hab
continente
territorio
moneda
capital

Hagan 3 paises con typescript
*/

/* 
Item 
nombre
valor
nivel

Personaje
nombre
item_mano_derecha: Item
dinero

Hagan 2 items y 2 personajes
*/

interface PaisInterface {
  nombre: string,
  cantidad_hab: number,
  continente: string,
  territorio: number,
  moneda: string,
  capital: string
}

const pais_1: PaisInterface = {
  nombre: "Argentina",
  cantidad_hab: 45000,
  continente: "América",
  territorio: 2.78,
  moneda: "Peso Argentino",
  capital: "Buenos Aires"
}

const pais_2: PaisInterface = {
  nombre: "Brasil",
  cantidad_hab: 200000,
  continente: "América",
  territorio: 10000,
  moneda: "Real",
  capital: "Brasilia"
}

const pais_3: PaisInterface = {
  nombre: "Perú",
  cantidad_hab: 10000,
  continente: "América",
  territorio: 2.5,
  moneda: "Peso peruano",
  capital: "Lima",
}



interface ItemInterface {
  nombre: string;
  valor: number;
  nivel: number;
  id: number
}
interface PersonajeInterface {
  nombre: string;
  item_mano_derecha: ItemInterface | null;
  dinero: number;
}

const espadada_de_oro: ItemInterface = {
  nombre: "Espada",
  valor: 5000,
  nivel: 5,
  id: 1
}

const personaje: PersonajeInterface = {
  nombre: "Ramiro",
  item_mano_derecha: espadada_de_oro,
  dinero: 80000,
};

const nombres_paises: string[] = ['Argentina', 'Francia', 'Brasil']
const tienda_items: ItemInterface[] = [
  {
    nombre: 'Casco de cobre',
    valor: 1200,
    nivel: 2,
    id: 2
  },
  {
    nombre: 'Casco de cobre',
    valor: 1200,
    nivel: 2,
    id: 3
  },
  {
    nombre: 'Casco de cobre',
    valor: 1200,
    nivel: 2,
    id: 4
  }
]


/* 

Agregar a la interface de Item la propiedad id
Tienda:
-nombre
-dinero_en_cuenta
-items_en_venta (Lista de items)
-id

Crear una tienda que tenga 5 items
Crear una funcion llamada vender(tienda (el objeto tienda), id_item )
  -Si el item no existe lazar un error por consola ("Error: Item no existe")
  -Debera eliminar el item de la lista items en venta
  -Debera incrementar el dinero en cuenta por el valor del item vendido
*/

/* 

const kiosco_1 = {
  id: 1,
  nombre,
  dinero_en_cuenta: 10,
  items_en_venta: [
    {
      name: 'Pipas 150gr',
      valor: 1000,
      nivel: 1,
      id: 344
    }
  ]
}
vender(kiosco_1, 344)
-Eliminar las pipas del objeto kiosko_1
-Aumentar el dinero en cuenta de la tienda en 1000
*/

interface Tienda {
  items_en_venta: ItemInterface[];
  dinero_en_caja: number
}


function buscarItem(tienda: Tienda, id_item: number): null | ItemInterface {
  for (const item of tienda.items_en_venta) {
    if (item.id === id_item) {
      return item
    }
  }
  return null
}

function vender(tienda: Tienda, id_item: number): void {
  let item_buscado: null | ItemInterface = buscarItem(tienda, id_item)
  //Buscar en tienda el item con el id buscado, si no existe tirar mensaje de error por consola

  if (!item_buscado) {
    console.error('Item no existe')
    return;
  }

  //Eliminar item de la tienda
  tienda.items_en_venta = tienda.items_en_venta.filter(item => item.id !== id_item)
  //Incrementar el dinero_en_caja
  tienda.dinero_en_caja += item_buscado.valor
}

const maxikiosko: Tienda = {
  items_en_venta: [
    {
      nombre: 'Pipas 150gr',
      valor: 1000,
      nivel: 1,
      id: 344
    }
  ],
  dinero_en_caja: 10
}


vender(maxikiosko, 344)
vender(maxikiosko, 80)
console.log(maxikiosko)

