export function addCarrito(){
    let producto={};
    producto.nombre= document.querySelector('#modalTitulo').textContent;
    producto.img= document.querySelector('#modalImg').src;
    producto.author= document.querySelector('#modalAuthor').textContent;
    producto.genero= document.querySelector('#modalGenero').textContent;
    producto.descripcion= document.querySelector('#modalDescripcion').textContent;
    producto.year=document.querySelector('#modalYear').textContent;
    producto.editorial= document.querySelector('#modalEditorial').textContent;
    producto.disponibles= Number(document.querySelector('#modalDisponibles').textContent);
    producto.precio=Number(document.querySelector('#modalPrecio').textContent);

    const cantidad=Number(document.querySelector('#modalCantidad').value);
    producto.cantidad= cantidad;

    return(producto);
}