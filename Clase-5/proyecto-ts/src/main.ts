import Proveedor from "./Proveedor"
import Tienda from "./Tienda"

const marolio = new Proveedor('Marolio SA', 'Av siempreviva', new Date(), 1)

const salsa_tomate_marolio_id = marolio.registrarItem('Salsa tomate 300g', 700, 1, 'Salsa de tomate roja')

console.log(marolio.comprar(salsa_tomate_marolio_id, 2))


const sucursal_1 = new Tienda('Supermercado Luna', 7000, 1)


sucursal_1.comprar(marolio, salsa_tomate_marolio_id, 3, 30 )
sucursal_1.comprar(marolio, salsa_tomate_marolio_id, 3, 30 )

console.log(sucursal_1)

sucursal_1.comprar(marolio, salsa_tomate_marolio_id, 3, 30 )