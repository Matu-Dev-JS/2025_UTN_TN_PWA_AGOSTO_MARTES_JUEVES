import Item from "./Item"
import type Proveedor from "./Proveedor"


interface ItemTiendaConstructorParams {
    nombre: string, 
    precio: number, 
    id: number, 
    descripcion: string, 
    margen_ganancia: number, 
    stock: number
}

class ItemTienda extends Item {
    stock: number
    margen_ganancia: number
    constructor(
        {
            nombre, 
            precio, 
            id, 
            descripcion, 
            margen_ganancia, 
            stock
        } 
        : ItemTiendaConstructorParams
    ) {
        super(nombre, precio, id, descripcion)
        this.stock = stock
        this.margen_ganancia = margen_ganancia
    }
    setStock(nuevo_stock: number) {
        if (nuevo_stock < 0) {
            console.error('El Stock no puede ser negativo')
        }
        this.stock = nuevo_stock
    }
}

class Tienda {
    nombre: string
    cantidad_de_dinero_en_cuenta: number
    items: ItemTienda[] = []
    id: number
    constructor(nombre: string, cantidad_de_dinero_en_cuenta: number, id: number) {
        this.nombre = nombre
        this.cantidad_de_dinero_en_cuenta = cantidad_de_dinero_en_cuenta
        this.id = id
    }

    buscarItemPorId(id_item_buscado: number): null | ItemTienda {
        for (const item of this.items) {
            if (item.id === id_item_buscado) {
                return item
            }
        }
        return null
    }
    eliminarPorId(id_item_buscado: number): boolean {
        const index = this.items.findIndex(item => item.id === id_item_buscado)
        if (index !== -1) {
            this.items.splice(index, 1)
            return true
        }
        return false
    }

    vender(id_item_a_vender: number, cantidad_vendida: number): void {
        const item = this.buscarItemPorId(id_item_a_vender)
        if (!item) {
            console.error("Producto no encontrado")
            return
        }
        if (cantidad_vendida <= 0) {
            console.error("La cantidad debe ser mayor a 0")
            return
        }
        if (cantidad_vendida > item.stock) {
            console.error("Producto agotado")
            return
        }
        item.setStock(item.stock - cantidad_vendida)
        this.cantidad_de_dinero_en_cuenta += (item.precio * cantidad_vendida)
    }
    comprar(proveedor: Proveedor, id_producto: number, cantidad: number, margen_ganancia: number): boolean {
        const objeto_de_compra = proveedor.comprar(id_producto, cantidad)
        if(!objeto_de_compra){
            console.error('Error en la compra')
            return false
        }

        if (this.cantidad_de_dinero_en_cuenta < objeto_de_compra.precio_final) {
            console.error("No hay dinero suficiente")
            return false
        }

        /* buscamos el item en nuestra lista de inventario, por si ya lo tenemos y no registrarlo nuevamente */
        const item_existente = this.buscarItemPorId(objeto_de_compra.item_comprado.id)
        
        if (item_existente) {
            this.cantidad_de_dinero_en_cuenta -= objeto_de_compra.precio_final
            item_existente.setStock(item_existente.stock + cantidad)
        } 
        else {
            this.crearItemTienda({
                nombre: objeto_de_compra.item_comprado.nombre,
                precio: objeto_de_compra.item_comprado.precio,
                id: objeto_de_compra.item_comprado.id,
                descripcion: objeto_de_compra.item_comprado.descripcion,
                stock: cantidad,
                margen_ganancia: margen_ganancia
            })
        }
        this.cantidad_de_dinero_en_cuenta -= objeto_de_compra.precio_final
        return true
    }
    crearItemTienda(
        {
            nombre, 
            precio, 
            id, 
            descripcion, 
            stock, 
            margen_ganancia
        }: ItemTiendaConstructorParams
    ): void {
        const nuevo_item_tienda = new ItemTienda({nombre, precio, id, descripcion, stock, margen_ganancia})
        this.items.push(nuevo_item_tienda)
    }
}

export default Tienda


/* 

ItemProveedor: Item
    -id_proveedor 

Proveedor
    -nombre
    -direccion
    -fecha_creacion
    -id
    -items : ItemProveedor

    comprar(id_producto, cantidad_comprada) : {precio_final, item_comprado : ItemProveedor, cantidad}
    registrarItem(nombre, precio, descripcion ) : id_item_proveedor_creado -> Crear un nuevo ItemProveedor, asignarle un ID y sumarlo a la lista de items

*/
/* 
const marolio = new Proveedor('Marolio')
const id_salsa_tomate = marolio.registrarItem('salsa de tomate', 2000, 'salsa muy rica')

const {precio_final, item_comprado, cantidad } = marolio.comprar(id_salsa_tomate, 3)
 */
