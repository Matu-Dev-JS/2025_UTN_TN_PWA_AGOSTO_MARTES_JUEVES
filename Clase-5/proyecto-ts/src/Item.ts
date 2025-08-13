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
        console.log(`${this.nombre} es ${this.descripcion} y cuesta ${this.precio}`)
    }
}

export default Item