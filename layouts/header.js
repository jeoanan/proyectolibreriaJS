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
            href:"libreria.html"
        },
        {
            main:false,
            nombre:"Quienes Somos",
            hrefIndex:"vistas/nosotros.html",
            href:"nosotros.html"
        },
        {
            main:false,
            nombre:"Regístrate/Inicia Sesión",
            hrefIndex:"vistas/registrate.html",
            href:"registrate.html"
        }
    ];

    linksNav.forEach(linkNav=>{
        const listaLink=document.createElement('li');
        listaLink.classList.add('nav-item');

        const navLink=document.createElement('a');
        navLink.classList.add('nav-link');
        navLink.textContent=linkNav.nombre;

        if(linkNav.main){
            navLink.classList.add('active')
        }

        if(window.location.pathname=="/"){
            navLink.href=linkNav.hrefIndex;
        }else{
            navLink.href=linkNav.href;
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