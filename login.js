document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");
    if (!loginForm) return; // ⛔ Evita error si NO estamos en login.html

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
    
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
    
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    
        let usuario = usuarios.find(user => user.email === email && user.password === password);
    
        if (usuario) {

            // Guardar usuario logueado COMPLETO
            localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
            localStorage.setItem("login", "1");
            localStorage.setItem("usuario", usuario.nombre + " " + usuario.apellido);

            alert("Acceso correcto, bienvenido " + usuario.nombre);
            window.location.href = "index.html";

        } else {
            alert("Correo o contraseña incorrectos");
        }
    });

});

document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");

  togglePassword.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;

    togglePassword.textContent = 
      type === "password" ? "👁️" : "🙈";
  });
});





function limpiarCamposLogin() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("userError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("formMessage").textContent = "";
}
document.getElementById("limpiarCampos").addEventListener("click", function () {
    limpiarCamposLogin();
});

