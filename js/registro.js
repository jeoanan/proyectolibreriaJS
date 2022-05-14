import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

const botonregistro= document.querySelector('#registerButton');
let modalInformativo=new bootstrap.Modal(document.getElementById('modalinformativo'));

botonregistro.addEventListener("click",(e)=>{
    e.preventDefault();
 
    let correo =document.getElementById("correo").value
    let password=document.getElementById("password").value

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, correo, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // ...
        let textoinformativo=document.getElementById("informaciongeneral")
        let formulario=document.getElementById("formularioregistro")
        formulario.reset()
        textoinformativo.textContent="Exito registrandote"
        modalInformativo.show()
        setTimeout(function(){
            modalInformativo.hide()
        },2000)
       
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        let textoinformativo=document.getElementById("informaciongeneral")
        textoinformativo.textContent="Falla: "+errorMessage
        modalInformativo.show()
        
    }); 
})