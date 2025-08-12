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
    comprar(nuevo_item: Item, cantidad: number, margen_ganancia: number): boolean {

        const costo_compra = nuevo_item.precio * cantidad
        if (this.cantidad_de_dinero_en_cuenta < costo_compra) {
            console.error("No hay dinero suficiente")
            return false
        }

        const item_existente = this.buscarItemPorId(nuevo_item.id)
        
        if (item_existente) {
            this.cantidad_de_dinero_en_cuenta -= costo_compra
            item_existente.setStock(item_existente.stock + cantidad)
            return true
        } 
        else {
            this.crearItemTienda({
                nombre: nuevo_item.nombre,
                precio: nuevo_item.precio,
                id: nuevo_item.id,
                descripcion: nuevo_item.descripcion,
                stock: cantidad,
                margen_ganancia: margen_ganancia
            })
            this.cantidad_de_dinero_en_cuenta -= costo_compra
            return true
        }
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


/* 

ItemProveedor: Item
    -id_proveedor 

Proveedor
    -nombre
    -direccion
    -fecha_creacion
    -id
    -items : ItemProveedor

    comprar(id_producto, cantidad_comprada) : {precio_final, item_comprado : ItemProveedor}
    

*/
