import { dbBooks } from "../config/db.js";

export function tiendaBD(){
    const inventarioLibros = dbBooks();
    
    return(
        inventarioLibros.forEach(libro => {
            const productosTienda = document.querySelector('#productosTienda');
            
            const divCol = document.createElement('div');
            divCol.classList.add('col-12','col-sm-6','col-md-4','col-lg-3','mt-4');

            const divCard = document.createElement('div');
            divCard.classList.add('card','mb-3','text-center');
            divCard.style="width: 16rem";
            divCard.dataset.id = `${libro.id}`;

            const imgCard = document.createElement('img');
            imgCard.classList.add('card-img-top');
            imgCard.src=libro.img;
            imgCard.setAttribute("id",`img-${libro.id}`);
            imgCard.setAttribute("alt",`img-${libro.nombre}`);

            
            const divCardBody = document.createElement('div');
            divCardBody.classList.add('card-body');
            divCardBody.dataset.year =libro.ano;
            divCardBody.dataset.editorial =libro.editorial;
            
            const title = document.createElement('h5');
            title.classList.add('card-title','card-title-custom');
            title.textContent=libro.nombre;
            
            const descripcion = document.createElement('p');
            descripcion.classList.add('card-text','card-text-custom');
            descripcion.textContent=`Descripción: `;
            
            const spanDescripcion = document.createElement('span');
            spanDescripcion.textContent=`${libro.descripcion}`;
            spanDescripcion.setAttribute("id",`descripcion-${libro.id}`);
            descripcion.appendChild(spanDescripcion);

            const generos = document.createElement('p');
            generos.classList.add('card-text','card-text-custom');
            generos.textContent=`Géneros: `;

            const spanGenero = document.createElement('span');
            spanGenero.textContent=`${libro.generos}`;
            spanGenero.setAttribute("id",`genero-${libro.id}`);
            generos.appendChild(spanGenero);


            const autor = document.createElement('p');
            autor.classList.add('card-text','card-text-custom');
            autor.textContent=`Autor: `;

            const spanAuthor = document.createElement('span');
            spanAuthor.textContent=`${libro.autor}`;
            spanAuthor.setAttribute("id",`author-${libro.id}`);
            autor.appendChild(spanAuthor);

            const unidadesDisponibles = document.createElement('p');
            unidadesDisponibles.classList.add('card-text','card-text-custom');
            unidadesDisponibles.textContent=`Unidades Disponibles: `;

            const spanDescription = document.createElement('span');
            spanDescription.textContent=`${libro.unidades}`;
            spanDescription.setAttribute("id",`disponibles-${libro.id}`);
            unidadesDisponibles.appendChild(spanDescription);

            
            const precio = document.createElement('h6');
            precio.classList.add('text-danger');
            precio.textContent=`Precio: $ `;

            const spanPrecio = document.createElement('span');
            spanPrecio.textContent=`${libro.precio}`;
            spanPrecio.setAttribute("id",`precio-${libro.id}`);
            precio.appendChild(spanPrecio);

            const botonCard= document.createElement('button');
            botonCard.classList.add('btn','btn-primary');
            botonCard.textContent="Adquirir";
            
            if(libro.unidades === 0){
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
        })
    )

}