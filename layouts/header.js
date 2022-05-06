export function header(){
    const navigation=document.querySelector('#navigation');

    const linkMain=document.createElement('a');
    linkMain.classList.add('navbar-brand', 'animate__animated', 'animate__pulse');
    
    const logoMain=document.createElement('img');
    logoMain.width=90;
    logoMain.height=83;

    const titlePage=document.createElement('strong');
    titlePage.textContent="EL COLECCIONISTA DE LIBROS";

    const divNav=document.createElement('div');
    divNav.classList.add('d-flex');

    const divnavbarNav=document.createElement('div')
    divnavbarNav.classList.add('collapse','navbar-collapse');
    divnavbarNav.id="navbarNav";

    const ulNavBar=document.createElement('ul');
    ulNavBar.classList.add('navbar-nav');

    const linksNav = [
        {
            main:true,
            nombre:"Tienda Online",
            hrefIndex:"vistas/libreria.html",
            href:"libreria.html",
            icon:false
        },
        {
            main:false,
            nombre:"Quienes Somos",
            hrefIndex:"vistas/nosotros.html",
            href:"nosotros.html",
            icon:false
        },
        {
            main:false,
            nombre:"Regístrate/Inicia Sesión",
            hrefIndex:"vistas/registrate.html",
            href:"registrate.html",
            icon:false
        },
        {
            main:false,
            nombre:"",
            icon:true
        }
    ];

    linksNav.forEach(linkNav=>{
        const listaLink=document.createElement('li');
        listaLink.classList.add('nav-item');

        const navLink=document.createElement('a');
        navLink.classList.add('nav-link','navlink-custom');

        if(linkNav.icon && window.location.pathname=="/vistas/libreria.html"){
            const iconContainer=document.createElement('i');
            iconContainer.classList.add('bi','bi-cart3','icon-custom');

            const spanCounter= document.createElement('span')
            spanCounter.classList.add('position-absolute','top-10','start-10','translate-middle','badge','rounded-pill','bg-warning','invisible')
            spanCounter.id='contador';
            spanCounter.textContent=99;

            navLink.id="showCarrito";
            navLink.appendChild(iconContainer);
            navLink.appendChild(spanCounter);
        }else{
            navLink.textContent=linkNav.nombre;

            if(window.location.pathname=="/"){
                navLink.href=linkNav.hrefIndex;
            }else{
                navLink.href=linkNav.href;
            }
        }

        if(linkNav.main){
            navLink.classList.add('active')
        }

        ulNavBar.appendChild(navLink);
    });


    if(window.location.pathname=="/"){
        linkMain.href="/";
        logoMain.src="public/img/logo_dark.png";
    }else{
        linkMain.href="../";
        logoMain.src="../public/img/logo.png";
    }

    linkMain.appendChild(logoMain);
    linkMain.appendChild(titlePage);

    divnavbarNav.appendChild(ulNavBar);

    divNav.appendChild(divnavbarNav);

    navigation.appendChild(linkMain);
    navigation.appendChild(divNav);

}