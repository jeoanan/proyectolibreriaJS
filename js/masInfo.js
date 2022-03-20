export function masInfo(event){
    let producto = {};
    
    if(event.target.classList.contains("btn")){
       let modalTienda = new bootstrap.Modal(document.getElementById('modalTienda'));
       modalTienda.show();

       producto.id=event.target.parentElement.parentElement.dataset.id;
       producto.editorial=event.target.parentElement.dataset.editorial;
       producto.descripcion=document.querySelector(`#descripcion-${producto.id}`).textContent;
       producto.genero=document.querySelector(`#genero-${producto.id}`).textContent;
       producto.author=document.querySelector(`#author-${producto.id}`).textContent;
       producto.disponibles=document.querySelector(`#disponibles-${producto.id}`).textContent;
       producto.precio=document.querySelector(`#precio-${producto.id}`).textContent;
       producto.img=document.querySelector(`#img-${producto.id}`).src;
       producto.nombre=event.target.parentElement.querySelector("h5").textContent;
       producto.year=event.target.parentElement.dataset.year;

       document.querySelector('#modalTitulo').textContent = producto.nombre;
       document.querySelector('#modalImg').src = producto.img;
       document.querySelector('#modalAuthor').textContent=`Autor: ${producto.author}`;
       document.querySelector('#modalGenero').textContent=`Géneros: ${producto.genero}`;
       document.querySelector('#modalDescripcion').textContent=`Descripción: ${producto.descripcion}`;
       document.querySelector('#modalYear').textContent=`Año: ${producto.year}`;
       document.querySelector('#modalEditorial').textContent=`Editorial: ${producto.editorial}`;
       document.querySelector('#modalDisponibles').textContent=`Unidades Disponibles: ${producto.disponibles}`;
       document.querySelector('#modalPrecio').textContent=`Precio: ${producto.precio}`;

       console.log(producto)
    };
}