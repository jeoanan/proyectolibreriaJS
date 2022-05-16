export function listarCarrito(carritoObj){
    const {carrito, usdMoneda, cantidadProductos} = carritoObj;

    const carritoBody = document.querySelector('#CarritoBody');
    carritoBody.textContent="";
    let total=0;
    
    if (cantidadProductos === 0){
        const h5 = document.createElement('h5');
        h5.textContent="Aun no has agregado nada a tu carrito";

        const iconCarritoEmptyContainer = document.createElement('h3');
        iconCarritoEmptyContainer.classList.add('text-center');

        const iconCarritoEmpty = document.createElement('i');
        iconCarritoEmpty.classList.add('bi', 'bi-cart-x','i-custom','text-danger');

        iconCarritoEmptyContainer.appendChild(iconCarritoEmpty)

        carritoBody.appendChild(h5);
        carritoBody.appendChild(iconCarritoEmptyContainer);
    }else{
        carrito.forEach(producto => {
            const divContentCarrito=document.createElement('div');
            divContentCarrito.classList.add('row','mb-3');

            const colCarrito1=document.createElement('div');
            colCarrito1.classList.add('col-4');

            const imgProductoCarritoEl= document.createElement('img');
            imgProductoCarritoEl.classList.add('img-fluid','h-100');
            imgProductoCarritoEl.src=producto.img;


            const colCarrito2=document.createElement('div');
            colCarrito2.classList.add('col-8');
            const tituloLibro=document.createElement('h5');
            tituloLibro.classList.add('text-uppercase');
            tituloLibro.textContent=producto.nombre;
            
            const editorialp=document.createElement('p');
            editorialp.classList.add('pcarrito');
            editorialp.textContent="Editorial: ";
            const editorialLibro=document.createElement('span');
            editorialLibro.textContent=producto.editorial;
            
            const autorP=document.createElement('p');
            autorP.classList.add('pcarrito');
            autorP.textContent="Autor: ";
            const autorLibro=document.createElement('span');
            autorLibro.textContent=producto.author;
            
            const yearP=document.createElement('p');
            yearP.classList.add('pcarrito');
            yearP.textContent="Año: ";
            const yearLibro=document.createElement('span');
            yearLibro.textContent=producto.year;
        
            const generoP=document.createElement('p');
            generoP.classList.add('pcarrito');
            generoP.textContent="Género: ";
            const generoLibro=document.createElement('span');
            generoLibro.textContent=producto.genero;

            const descripcionP=document.createElement('p');
            descripcionP.classList.add('pcarrito');
            descripcionP.textContent="Descripción: ";
            const descripcionLibro=document.createElement('span');
            descripcionLibro.textContent=producto.descripcion;

            const divContainerSubtotal=document.createElement('div');
            divContainerSubtotal.classList.add('row','divContainerSubtotal-custom')
            const divContainerCantidad=document.createElement('div');
            divContainerCantidad.classList.add('col-6');
            const divContainerPrecio=document.createElement('div');
            divContainerPrecio.classList.add('col-6');

            const cantidadH= document.createElement('h5');
            cantidadH.classList.add('fs-5','col-8','mb-4');
            cantidadH.textContent="Cantidad: ";
            const cantidadLibro= document.createElement('span');
            cantidadLibro.textContent=producto.cantidad;
            const quitarProducto= document.createElement('button');
            quitarProducto.classList.add('btn','btn-danger');
            quitarProducto.textContent="Quitar producto";

            const precioH= document.createElement('h5');
            precioH.classList.add('fs-5','col-12','mb-4');
            precioH.textContent="Precio: ";
            const precioLibro= document.createElement('span');
            let precioProducto;
            if(usdMoneda){
                precioProducto = producto.precio/4057;
                precioProducto = precioProducto.toFixed(2);
            }else{
                precioProducto = producto.precio;
            }
            precioLibro.textContent=precioProducto;

            const subtotalH= document.createElement('h5');
            subtotalH.classList.add('fs-5','col-12');
            subtotalH.textContent="Subtotal: ";
            const subtotalSpan= document.createElement('span');

            let subtotal = producto.cantidad * precioProducto;
            subtotalSpan.textContent=subtotal;

            total+=subtotal;

            cantidadH.appendChild(cantidadLibro);
            precioH.appendChild(precioLibro);
            subtotalH.appendChild(subtotalSpan);

            divContainerCantidad.appendChild(cantidadH);
            divContainerCantidad.appendChild(quitarProducto);
            divContainerPrecio.appendChild(precioH);
            divContainerPrecio.appendChild(subtotalH);

            
            editorialp.appendChild(editorialLibro);
            autorP.appendChild(autorLibro);
            yearP.appendChild(yearLibro);
            generoP.appendChild(generoLibro);
            descripcionP.appendChild(descripcionLibro);
            divContainerSubtotal.appendChild(divContainerCantidad);
            divContainerSubtotal.appendChild(divContainerPrecio);


            colCarrito1.appendChild(imgProductoCarritoEl);

            colCarrito2.appendChild(tituloLibro);
            colCarrito2.appendChild(editorialp);
            colCarrito2.appendChild(autorP);
            colCarrito2.appendChild(yearP);
            colCarrito2.appendChild(generoP);
            colCarrito2.appendChild(descripcionP);
            colCarrito2.appendChild(divContainerSubtotal);


            divContentCarrito.appendChild(colCarrito1);
            divContentCarrito.appendChild(colCarrito2);

            carritoBody.appendChild(divContentCarrito);
        });
    }
    
    const totalDiv = document.querySelector('#totalCarrito');
    totalDiv.textContent="";
    const totalH= document.createElement('h5');
    totalH.classList.add('fs-5');
    totalH.textContent="Total a pagar: ";
    const totalSpan= document.createElement('span');
    totalSpan.textContent=total.toFixed(2);

    totalH.appendChild(totalSpan)
    totalDiv.appendChild(totalH);
}