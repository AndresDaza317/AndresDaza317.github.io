// ==============================
//   MENÚ HAMBURGUESA
// ==============================
document.getElementById("menuToggle").addEventListener("click", function () {
    document.getElementById("sideMenu").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
});

// ==============================
//   CONTROL DE LOGIN EN INDEX
// ==============================
document.addEventListener("DOMContentLoaded", function () {

    const authLinks = document.getElementById("authLinks");
    const userInfo = document.getElementById("userInfo");
    const bienvenidoTexto = document.getElementById("bienvenidoTexto");

    let login = localStorage.getItem("login");
    let usuarioNombre = localStorage.getItem("usuario");

    // Si el usuario está logueado
    if (login === "1" && usuarioNombre) {

        let primerNombre = usuarioNombre.split(" ")[0];
        bienvenidoTexto.textContent = "Bienvenido, " + primerNombre;

        authLinks.style.display = "none";
        userInfo.style.display = "flex";

        activarBotonesDePlanes();
    }

    // Si NO está logueado
    else {
        authLinks.style.display = "flex";
        userInfo.style.display = "none";
    }
});

// ==============================
//   ACTIVAR BOTONES DE PLANES
// ==============================
function activarBotonesDePlanes() {
    let botonesPlanes = document.querySelectorAll(".planes button");

    botonesPlanes.forEach(btn => {
        btn.addEventListener("click", function () {
            window.location.href = "perfil.html";
        });
    });
}
