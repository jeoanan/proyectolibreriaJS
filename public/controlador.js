import {tiendaBD} from '../js/tiendaBD.js';
import {masVendidos} from '../js/masVendidos.js'
import {masInfo} from '../js/masInfo.js';
import {header} from '../layouts/header.js';

document.addEventListener('DOMContentLoaded', ()=>{
    let contenidoTienda=document.querySelector('#productosTienda');
    let contenidoTop=document.querySelector('#top4');

    setTimeout(()=>{
        header();
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
    },100);
    
    

    

});


