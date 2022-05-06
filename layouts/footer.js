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
    divCol2Footer.textContent="Seccion2";

    const divCol3Footer= document.createElement('div');
    divCol3Footer.classList.add('col-4');
    divCol3Footer.textContent="Seccion3";

    divCol1Footer.appendChild(titleSeccion1);
    divCol1Footer.appendChild(divredes);

    divRowFooter.appendChild(divCol1Footer);
    divRowFooter.appendChild(divCol2Footer);
    divRowFooter.appendChild(divCol3Footer);
    

    divContainerFooter.appendChild(divRowFooter);
    footer.appendChild(divContainerFooter);
}

