import Item from "./Item"

class ItemProveedor extends Item {
    id_proveedor : number
    constructor ( 
        id: number, 
        nombre: string, 
        precio: number, 
        descripcion: string, 
        id_proveedor: number 
    ){
        super(nombre, precio, id, descripcion)
        this.id_proveedor = id_proveedor
    }
}


class Proveedor {
    items: ItemProveedor[] = []
    nombre: string
    direccion: string
    fecha_creacion: Date
    id:  number
    constructor (
        nombre: string, 
        direccion: string, 
        fecha_creacion: Date, 
        id: number
    ){
        this.nombre = nombre
        this.direccion = direccion
        this.fecha_creacion = fecha_creacion
        this.id = id
    }

    buscarItemPorId (id_item: number): ItemProveedor | null{
        const item_buscado =  this.items.find(
            (producto ) => producto.id === id_item
        ) 
        return item_buscado || null
    }

    registrarItem (nombre: string, precio: number, id: number, descripcion: string) : number{
        const nuevo_item = new ItemProveedor(id, nombre, precio, descripcion, this.id)
        this.items.push(nuevo_item)
        return nuevo_item.id
    }

    comprar (
        id_producto: number, 
        cantidad: number
    ) : { 
        precio_final: number, 
        item_comprado: ItemProveedor,
        cantidad: number
    } | null
    {
        const item_existente = this.buscarItemPorId(id_producto)
        if(!item_existente){
            console.error('Error: Item no registrado en este proveedor ')
            return null
        }

        const precio_final = item_existente.precio * cantidad
        return {
            precio_final,
            item_comprado: item_existente,
            cantidad
        }
    }

}

export default Proveedor

