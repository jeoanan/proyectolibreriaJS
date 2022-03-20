import { dbBooks } from "../config/db.js";
const inventarioLibros = dbBooks();

export function masVendidos(){
    for(let i=0;i<12;i = i + 3){
        const productosTienda = document.querySelector('#top4');

        const divCol = document.createElement('div');
        divCol.classList.add('col-12','col-sm-6','col-md-4','col-lg-3','mt-4');

        const divCard = document.createElement('div');
        divCard.classList.add('card','mb-3','text-center');
        divCard.style="width: 16rem";
        divCard.dataset.id = `${inventarioLibros[i].id}`;

        const imgCard = document.createElement('img');
        imgCard.classList.add('card-img-top');
        imgCard.src=inventarioLibros[i].img;

        
        const divCardBody = document.createElement('div');
        divCardBody.classList.add('card-body');
        divCardBody.dataset.year =inventarioLibros[i].ano;
        divCardBody.dataset.editorial =inventarioLibros[i].editorial;
        
        const title = document.createElement('h5');
        title.classList.add('card-title','card-title-custom');
        title.textContent=inventarioLibros[i].nombre;
        
        const descripcion = document.createElement('p');
        descripcion.classList.add('card-text','card-text-custom');
        descripcion.textContent=`Descripción: ${inventarioLibros[i].descripcion}`;

        const generos = document.createElement('p');
        generos.classList.add('card-text','card-text-custom');
        generos.textContent=`Géneros: ${inventarioLibros[i].generos}`;

        const autor = document.createElement('p');
        autor.classList.add('card-text','card-text-custom');
        autor.textContent=`Autor: ${inventarioLibros[i].autor}`;

        const unidadesDisponibles = document.createElement('p');
        unidadesDisponibles.classList.add('card-text','card-text-custom');
        unidadesDisponibles.textContent=`unidades Disponibles: ${inventarioLibros[i].unidades}`;
        
        const precio = document.createElement('h6');
        precio.classList.add('text-danger');
        precio.textContent=`Precio $ ${inventarioLibros[i].precio}`;

        const botonCard= document.createElement('button');
        botonCard.classList.add('btn','btn-primary');
        botonCard.textContent="Adquirir";
        
        if(inventarioLibros[i].unidades === 0){
            botonCard.setAttribute("disabled","");
        }


        divCardBody.appendChild(title);
        divCardBody.appendChild(descripcion);
        divCardBody.appendChild(generos);
        divCardBody.appendChild(autor);
        divCardBody.appendChild(unidadesDisponibles);
        divCardBody.appendChild(precio);
        divCardBody.appendChild(botonCard);

        divCard.appendChild(imgCard);
        divCard.appendChild(divCardBody);

        divCol.appendChild(divCard);
        productosTienda.appendChild(divCol);
    }
   
}

