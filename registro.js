
document.addEventListener("DOMContentLoaded", function () {

    // BLOQUEAR ejecución si no existe el formulario
    const registroForm = document.getElementById("registroForm");
    if (!registroForm) return;

    registroForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let apellido = document.getElementById("apellido").value.trim();
        let edad = document.getElementById("edad").value.trim();
        let weight = document.getElementById("weight").value.trim();
        let height = document.getElementById("height").value.trim();
        let date = document.getElementById("date").value.trim();
        let genero = document.querySelector('input[name="genero"]:checked')?.value || "";
        let telefono = document.getElementById("telefono").value.trim();
        let ciudad = document.getElementById("ciudad").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let confirm_password = document.getElementById("confirm_password").value.trim();
    
        if (!nombre || !apellido || !edad || !weight || !height || !date || !genero || 
            !telefono || !ciudad || !email || !password || !confirm_password) {
            alert("Por favor completa todos los campos antes de registrarte.");
            return;
        }
    
        if (password !== confirm_password) {
            alert("Las contraseñas no coinciden");
            return;
        }
    
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    
        let usuario = {
            nombre,
            apellido,
            edad,
            weight,
            height,
            date,
            genero,
            telefono,
            ciudad,
            email,
            password
        };
    
        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    
        alert("Usuario registrado con éxito");
        window.location.href = "login.html";
    });

});

// Función para cerrar sesión
function salir() {
    localStorage.setItem("login", "0");
    localStorage.setItem("usuario", "");
    localStorage.removeItem("usuarioActivo");
    location.href = "index.html";
}
