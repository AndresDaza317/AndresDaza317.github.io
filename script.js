function verificar(){
    let login = 0
    if(localStorage.getItem("login")){
        login = localStorage.getItem("login")
        nombre = localStorage.getItem("usuario")
    }
    if(login == 0){
        location.href = "index.html"
    }else{
        document.getElementById("name").textContent = nombre
    }
}

let usuarios = []
if(localStorage.getItem("usuarios")){
    usuarios = JSON.parse(localStorage.getItem("usuarios"))
}

function registrarse(){
let nombre = document.getElementById("nombre").value
let email = document.getElementById("email").value
let password = document.getElementById("password").value
let usuario = {
    "nombre": nombre,
    "email": email,
    "password": password
}
usuarios.push(usuario)
localStorage.setItem("usuarios", JSON.stringify(usuarios))
alert("usuario registrado")
location.href = "index.html"
}
function ingresar(){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    for(let usuario of usuarios){
        if(usuario.email == email && usuario.password == password){
            localStorage.setItem("login", 1)
            localStorage.setItem("usuario", usuario.nombre)
            alert("el usuario ingreso correctamente")
            location.href = "admin.html"
            return
        }
    }
}
function salir(){
    localStorage.setItem("login", 0)
    localStorage.setItem("usuario", "")
    location.href = "index.html"
}



// Menú desplegable hamburguesa
document.getElementById("menuToggle").addEventListener("click", function(){
    document.getElementById("navMenu").classList.toggle("active");
});
