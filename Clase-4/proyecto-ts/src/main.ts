
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

Crear la class Tienda
  -nombre
  -cantidad_dinero_en_cuenta
  -items: Item[],
  -id

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