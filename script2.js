function registrarse(){
let nombre = document.getElementById("nombre").value
let email = document.getElementById("email").value
let password = document.getElementById("password").value
let usuario = {

    "nombre": nombre,
    "apellido":apellido,
    "edad":edad,
    "date":date,
    "genero":genero,
    "telefono":telefono,
    "ciudad":ciudad,
    "peso":
    "email": email,
    "password": password
    ""
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
            location.href = "registrarse.html"
            return
        }
    }
}