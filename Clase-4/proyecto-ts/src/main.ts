
/* interface Persona{
  nombre: string;
  apellido: string
} */



class Persona {
  nombre: string
  apellido: string
  constructor(nombre: string, apellido: string) {
    /* Aca podemos validar los datos */
    if (!nombre) {
      console.error("Nombre is required")
    }
    this.nombre = nombre
    this.apellido = apellido
  }

  /* Esto es un metodo */
  presentarme() : void{
    console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`)
  }

}




const persona_2: Persona = new Persona("Juan", 'Gomez')
const persona_3: Persona = new Persona("Sofia", 'Manchado')
persona_2.presentarme()
persona_3.presentarme()

/* 
Crear la class Item
  -nombre
  -precio
  -id
  -descripcion
  -Mostrar item: Mostrara por consola el mensaje: {nombre} es {descripcion} y cuesta ${precio} Rupias

Crear la class Tienda
  -nombre
  -cantidad_dinero_en_cuenta
  -items: Item[],
  -id
  -buscarItemPorId(id_item_buscado) 
    -buscar en la lista de items el item buscado y devolvera el mismo, sino devolvera null

  -eliminarPorId(id_item_buscado): true (si elmina) | false (si no elimina)
    -eliminar el item con el id recibido y devolver un boolean de status

  -vender(id_item_vendido) 
    -Buscar el item en la lista de items, si existe lo va a eliminar y incrementara su cantidad de dinero en cuenta igual al precio del item
    -Si no hay item con ese id lanzar mensaje de error "Producto no encontrado"
  
*/

class Item {
  nombre: string
  precio: number
  id: number
  descripcion: string
  constructor(nombre: string, precio: number, id: number, descripcion: string) {
    this.nombre = nombre
    this.precio = precio
    this.id = id
    this.descripcion = descripcion
  }
}

class Tienda {
	nombre: string
	cantidad_dinero_en_cuenta: number
	id: number
  items: Item[] = []
	constructor(nombre: string, cantidad_dinero_en_cuenta: number, id: number){
		this.nombre = nombre
		this.cantidad_dinero_en_cuenta = cantidad_dinero_en_cuenta
		this.id = id
	}

}

function retornarAlgo () : {nombre: string} | null {
  if(Math.random( ) > 0.5){
    return {nombre: 'pepe'}
  }
  return null
}
function hacerXAccion () {
  let result = retornarAlgo()
  if(!result){
    console.log('Error')
  }
  else{
    console.log(result.nombre)
  }
}

hacerXAccion()