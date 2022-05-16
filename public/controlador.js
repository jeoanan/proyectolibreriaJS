import {tiendaBD} from '../js/tiendaBD.js';
import {masVendidos} from '../js/masVendidos.js'
import {masInfo} from '../js/masInfo.js';
import {header} from '../layouts/header.js';
import {footer} from '../layouts/footer.js';
import {addCarrito} from '../js/addCarrito.js';
import { showCarrito } from '../js/showCarrito.js';
import { limpiarCarrito } from '../js/limpiarCarrito.js';
import { listarCarrito } from '../js/listarCarrito.js';

document.addEventListener('DOMContentLoaded', ()=>{
    let contenidoTienda=document.querySelector('#productosTienda');
    let contenidoTop=document.querySelector('#top4');
    let carritoObj={carrito:[],usdMoneda:false,cantidadProductos:0}

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

            console.log(carritoObj);
            
            showCarrito(carritoObj);
        })
    },100);

    const addCarritoButton = document.querySelector('#btnCarrito');

    addCarritoButton.addEventListener('click',()=>{

        let producto = addCarrito();
        carritoObj.cantidadProductos+= Number(producto.cantidad);

        if (carritoObj.cantidadProductos > 0){
            const contador = document.querySelector('#contador');
            contador.textContent=carritoObj.cantidadProductos;
            contador.classList.remove('invisible');
        }
        
        carritoObj.carrito.push(producto);

        console.log(carritoObj.carrito)
    });

    const cambioMonedaButton= document.querySelector('#cambioMoneda');
    cambioMonedaButton.textContent="Cambiar a dólares (USD)"

    cambioMonedaButton.addEventListener('click',()=>{
        if(!carritoObj.usdMoneda){
            cambioMonedaButton.textContent="Cambiar a Pesos (COP)";
            cambioMonedaButton.classList.remove("btn-success");
            cambioMonedaButton.classList.add("btn-warning");
            carritoObj.usdMoneda=true;
        }else{
            cambioMonedaButton.textContent="Cambiar a dólares (USD)";
            cambioMonedaButton.classList.remove("btn-warning");
            cambioMonedaButton.classList.add("btn-success");
            carritoObj.usdMoneda=false;
        }
        listarCarrito(carritoObj);
    })

    const resetCarritoButton = document.querySelector('#resetCarritoButton');
    resetCarritoButton.addEventListener('click',()=>{
        const carritoBody = document.querySelector('#CarritoBody');
        carritoBody.textContent="";

        carritoObj.carrito=[];
        carritoObj.cantidadProductos=0;

        const contador = document.querySelector('#contador');
        contador.classList.add('invisible');
    });
});


