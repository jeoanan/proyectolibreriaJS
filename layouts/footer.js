export function footer(){
    const redes = [
        { 
            href:"https://www.instagram.com/librerianacional/",
            img:"../public/img/instagramIcon.png"
        },
        {
            href:"https://www.facebook.com/librerianacional/",
            img:"../public/img/facebookIcon.png"
        }
    ]
    const footer = document.querySelector('#footer');
    footer.classList.add('footer','mt-5','text-center','p-3')
    const divContainerFooter = document.createElement('div')
    divContainerFooter.classList.add('container');

    const divRowFooter = document.createElement('div')
    divRowFooter.classList.add('row');

    const divCol1Footer= document.createElement('div');
    divCol1Footer.classList.add('col-4');

    const titleSeccion1 = document.createElement('h2');
    titleSeccion1.textContent="Nuestras redes";

    const divredes=document.createElement('div');
    divredes.classList.add('row', 'mt-4');

    redes.forEach(red=>{
        const linkRedes=document.createElement('a');
        linkRedes.classList.add('col','linkredes');
        linkRedes.target="_blank";
        linkRedes.href=red.href;

        const imgRedes=document.createElement('img');
        imgRedes.classList.add('img-fluid','h-100')
        imgRedes.src=red.img;

        linkRedes.appendChild(imgRedes);

        divredes.appendChild(linkRedes);
    });

    const divCol2Footer= document.createElement('div');
    divCol2Footer.classList.add('col-4');
    
    const titleSeccion2 = document.createElement('h2');
    titleSeccion2.textContent="Trabaja con Nosotros";

    const link1Seccion2 = document.createElement('a');
    link1Seccion2.classList.add('nav-link','nav-link-footer');
    link1Seccion2.textContent="Vende tus libros";

    const link2Seccion2 = document.createElement('a');
    link2Seccion2.classList.add('nav-link', 'nav-link-footer');
    link2Seccion2.textContent="Se nuestro aliado";

    const link3Seccion2 = document.createElement('a');
    link3Seccion2.classList.add('nav-link', 'nav-link-footer');
    link3Seccion2.textContent="Revisa nuestras vacantes";


    const divCol3Footer= document.createElement('div');
    divCol3Footer.classList.add('col-4');
    
    const titleSeccion3 = document.createElement('h2');
    titleSeccion3.textContent="Mas sobre Nosotros";

    const link1Seccion3 = document.createElement('a');
    link1Seccion3.classList.add('nav-link','nav-link-footer');
    link1Seccion3.href="../index.html"
    link1Seccion3.textContent="Inicio";

    const link2Seccion3 = document.createElement('a');
    link2Seccion3.classList.add('nav-link', 'nav-link-footer');
    link2Seccion3.href="../vistas/libreria.html"
    link2Seccion3.textContent="Nuestra tienda";

    const link3Seccion3 = document.createElement('a');
    link3Seccion3.classList.add('nav-link', 'nav-link-footer');
    link3Seccion3.href="../vistas/nosotros.html"
    link3Seccion3.textContent="Nosotros";


    divCol1Footer.appendChild(titleSeccion1);
    divCol1Footer.appendChild(divredes);

    divCol2Footer.appendChild(titleSeccion2);
    divCol2Footer.appendChild(link1Seccion2);
    divCol2Footer.appendChild(link2Seccion2);
    divCol2Footer.appendChild(link3Seccion2);

    divCol3Footer.appendChild(titleSeccion3);
    divCol3Footer.appendChild(link1Seccion3);
    divCol3Footer.appendChild(link2Seccion3);
    divCol3Footer.appendChild(link3Seccion3);

    divRowFooter.appendChild(divCol1Footer);
    divRowFooter.appendChild(divCol2Footer);
    divRowFooter.appendChild(divCol3Footer);
    
    const divRowCopyRightFooter = document.createElement('div')
    divRowCopyRightFooter.classList.add('row');

    divContainerFooter.appendChild(divRowFooter);
    divContainerFooter.appendChild(divRowCopyRightFooter);
    footer.appendChild(divContainerFooter);
}

