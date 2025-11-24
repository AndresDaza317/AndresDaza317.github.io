/*
    document.addEventListener("DOMContentLoaded", () => {
        let nombre = localStorage.getItem("usuario") || "Invitado";
        document.getElementById("usuarioNombre").textContent = nombre;
    });

    function cerrarSesion(){
        localStorage.removeItem("login");
        localStorage.removeItem("usuario");
        alert("Has cerrado sesión.");
        window.location.href = "index.html";
    }*/

document.addEventListener("DOMContentLoaded", () => {

    // ================================
    // 1. OBTENER USUARIO ACTIVO
    // ================================
    let usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

    // ================================
    // 2. VALIDAR SESIÓN
    // ================================
    if (!usuarioActivo) {
        // Si NO hay sesión -> redirigir
        alert("No estás logueado. Redirigiendo al login.");
        window.location.href = "login.html";
        return; // Detener ejecución
    }

    // ================================
    // 3. MOSTRAR NOMBRE EN HEADER
    // ================================
    if (document.getElementById("usuarioNombre")) {
        document.getElementById("usuarioNombre").textContent =
            usuarioActivo.nombre || "Invitado";
    }

    // ================================
    // 4. RELLENAR DATOS DEL PERFIL
    // ================================
    const campos = {
        nombre: usuarioActivo.nombre,
        apellido: usuarioActivo.apellido,
        edad: usuarioActivo.edad,
        peso: usuarioActivo.weight,
        altura: usuarioActivo.height,
        ciudad: usuarioActivo.ciudad,
        telefono: usuarioActivo.telefono,
        "fecha-nacimiento": usuarioActivo.date,
        genero: usuarioActivo.genero,
        email: usuarioActivo.email
    };

    // Rellenar los campos solo si existen en el HTML
    Object.keys(campos).forEach(id => {
        let elemento = document.getElementById(id);
        if (elemento) elemento.textContent = campos[id];
    });

    // ================================
    // 5. BOTÓN CERRAR SESIÓN
    // ================================
    const btnCerrarSesion = document.getElementById("cerrar-sesion-btn");

    if (btnCerrarSesion) {
        btnCerrarSesion.addEventListener("click", () => {
            localStorage.removeItem("usuarioActivo");
            localStorage.removeItem("login");
            localStorage.removeItem("usuario");
            alert("Has cerrado sesión.");
            window.location.href = "index.html";
        });
    }

});
