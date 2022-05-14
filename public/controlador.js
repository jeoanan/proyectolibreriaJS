import {tiendaBD} from '../js/tiendaBD.js';
import {masVendidos} from '../js/masVendidos.js'
import {masInfo} from '../js/masInfo.js';
import {header} from '../layouts/header.js';
import {footer} from '../layouts/footer.js';
import {addCarrito} from '../js/addCarrito.js';
import { showCarrito } from '../js/showCarrito.js';
import { cambioMoneda } from '../js/cambioMoneda.js';
import { limpiarCarrito } from '../js/limpiarCarrito.js';

document.addEventListener('DOMContentLoaded', ()=>{
    let contenidoTienda=document.querySelector('#productosTienda');
    let contenidoTop=document.querySelector('#top4');
    let carrito =[];
    let usdMoneda=false;
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
            showCarrito(cantidadProductos,carrito,usdMoneda);
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

    const cambioMonedaButton= document.querySelector('#cambioMoneda');
    if(usdMoneda){
        cambioMonedaButton.textContent="COP"
    }else{
        cambioMonedaButton.textContent="USD"
    }
    cambioMonedaButton.addEventListener('click',()=>{
       let cambiarMoneda=cambioMoneda(usdMoneda);
       usdMoneda=cambiarMoneda;

       /* showCarrito(cantidadProductos,carrito,usdMoneda); */

       console.log(usdMoneda)
    })

    const resetCarritoButton = document.querySelector('#resetCarritoButton');
    resetCarritoButton.addEventListener('click',()=>{
        const carritoBody = document.querySelector('#CarritoBody');
        carritoBody.textContent="";

        carrito=[];
        cantidadProductos=0;

        const contador = document.querySelector('#contador');
        contador.classList.add('invisible');
    });



});


