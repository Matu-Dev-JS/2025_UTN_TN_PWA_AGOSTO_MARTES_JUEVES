
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
  setSuperpoder(poder : string){
    this.superpoder = poder
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
  -items: ItemTienda[],
  -id
  -buscarItemPorId(id_item_buscado) 
    -buscar en la lista de items el item buscado y devolvera el mismo, sino devolvera null

  -eliminarPorId(id_item_buscado): true (si elmina) | false (si no elimina)
    -eliminar el item con el id recibido y devolver un boolean de status

  -modificarStockItem(item : ItemTienda, cantidad)
    -checkear que la cantidad a decrementar sea menor o igual que el stock del item con el id buscado
    -Si es menor decrementar el stock del item utilizando setStock
    item = this.buscarItemPorId(id)
    if(item.stock >= cantidad_decrementar){
      item.setStock(item.setStock - cantidad)
    }
    

  -vender(id_item_a_vender cantidad_vendida) 
    -Buscar el item en la lista de items, si existe lo va a decrementar usando modificarStockItem y incrementara su cantidad de dinero por la (cantidad_vendida * precio * margen_ganancia)
    -Si no hay item con ese id lanzar mensaje de error "Producto no encontrado"
    -Si el stock del item es 0 lanzar mensaje de error "Producto agotado"
  
  -comprar(nuevo_item: Item, cantidad: number, margen_gancia: number)
    -Calcular el costo de la operacion y en caso de ser mayor a la cantidad de dinero en cuenta lanzar un error por consola diciendo, no se puede realizar la operacion, motivo: no hay dinero suficiente
    -Crear un ItemTienda a partir de Item
    -pushear a la lista de items
  

  ItemTienda extends Item
    -stock
    -margen_ganancia
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

class ItemTienda extends Item {
    stock: number;
    constructor(nombre: string, precio: number, id: number, descripcion: string, stock: number) {
        super(nombre, precio, id, descripcion);
        this.stock = stock;
    }
    setStock(nuevo_stock: number): ItemTienda {
        this.stock = nuevo_stock;
        return this
    }
}

/* const item_tienda_barra_chocolate = new ItemTienda('Barra chocolate', 3500, 2, 'Barra de chocolate Cofler', 5) */


class Tienda {
	nombre: string
	cantidad_dinero_en_cuenta: number
	id: number
  items: ItemTienda[] = []
	constructor(nombre: string, cantidad_dinero_en_cuenta: number, id: number){
		this.nombre = nombre
		this.cantidad_dinero_en_cuenta = cantidad_dinero_en_cuenta
		this.id = id
	}
  buscarPorId(id_item_buscado: number): null | ItemTienda {
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

  modificarStockItem(item: ItemTienda, cantidad_decrementar: number): null | boolean{
    if (item.stock >= cantidad_decrementar) {
      item.setStock(item.stock - cantidad_decrementar);
      return true;
    } else {
      return false;
    }
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