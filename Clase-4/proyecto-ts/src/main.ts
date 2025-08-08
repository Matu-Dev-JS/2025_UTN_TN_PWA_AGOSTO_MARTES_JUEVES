
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

class Superpersona extends Persona{
  superpoder: string
  constructor(nombre: string, apellido: string, superpoder: string){
    super(nombre, apellido)
    this.superpoder = superpoder
  }
}


const homelander = new Superpersona('Homelander', 'Ni idea', 'Volar')

homelander.presentarme()



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
  
  -comprar(nuevo_item, cantidad)
  

  ItemTienda extends Item
    -stock
    -setStock(nuevo_stock) y va a guardar el nuevo stock como valor de stock


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
  mostrarItem(): void {
    console.log(`${this.nombre} es ${this.descripcion} y cuesta $${this.precio} Rupias`)
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
  buscarPorId(id_item_buscado: number): null | Item {
    for (const item of this.items) {
      if (item.id === id_item_buscado) {
        return item
      }
    }
    return null
  }

  eliminarPorId(id_item_buscado: number): boolean {
    const itemIndex = this.items.findIndex(item => item.id === id_item_buscado);
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
      return true;
    }
    return false;
  }
  vender(id_item_vendido : number) : void {
    const item = this.buscarPorId(id_item_vendido);
    if (item) {
      this.cantidad_dinero_en_cuenta += item.precio;
      this.eliminarPorId(id_item_vendido);
      console.log(`Se ha vendido ${item.nombre} por $${item.precio} Rupias. Dinero en cuenta: $${this.cantidad_dinero_en_cuenta} Rupias.`);
    } else {
      console.error("Producto no encontrado");
    }
  }

}

const fravega = new Tienda('Fravega', 10000, 1)

const tv_samsung = new Item('Tv Samsung 45"', 5000, 1, 'Tv muy buena')

fravega.items.push(tv_samsung)

fravega.vender(1)

/* let cantidad_original = items.length
filter
this.items.length === cantidad_original */