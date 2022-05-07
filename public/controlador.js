import {tiendaBD} from '../js/tiendaBD.js';
import {masVendidos} from '../js/masVendidos.js'
import {masInfo} from '../js/masInfo.js';
import {header} from '../layouts/header.js';
import {footer} from '../layouts/footer.js';
import {addCarrito} from '../js/addCarrito.js';
import { showCarrito } from '../js/showCarrito.js';

document.addEventListener('DOMContentLoaded', ()=>{
    let contenidoTienda=document.querySelector('#productosTienda');
    let contenidoTop=document.querySelector('#top4');
    let carrito =[];
    let cantidadProductos=0;

    setTimeout(()=>{
        header();
        footer();
        if(window.location.pathname === '/vistas/libreria.html'){
            tiendaBD();
            contenidoTienda.addEventListener('click',event=>{
                masInfo(event);
            });

        } else if(window.location.pathname === '/'){
            masVendidos();
            contenidoTop.addEventListener('click',event=>{
                masInfo(event);
            });
        }

        const showcarritoModal = document.querySelector('#showCarrito');
        showcarritoModal.addEventListener('click',()=>{
            showCarrito(cantidadProductos,carrito);
        })
    },100);

    const addCarritoButton = document.querySelector('#btnCarrito');

    addCarritoButton.addEventListener('click',()=>{

        let producto = addCarrito();
        cantidadProductos+= Number(producto.cantidad);

        if (cantidadProductos > 0){
            const contador = document.querySelector('#contador');
            contador.textContent=cantidadProductos;
            contador.classList.remove('invisible');
        }
        
        carrito.push(producto);

        console.log(carrito)
    });

    
    
    
    

    
    



});


