import {listarCarrito} from './listarCarrito.js';
export function showCarrito(carrito){
    var carritoModal = new bootstrap.Modal(document.getElementById('modalCarrito'));

   listarCarrito(carrito);
    
    carritoModal.show();
}