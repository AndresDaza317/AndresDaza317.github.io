# 📖 MANUAL TÉCNICO - Santiago Herrera Fit

**Versión:** 1.0  
**Fecha:** 2025  
**Autor:** Santiago Herrera Fit Team

---

## 📑 Tabla de Contenidos

1. [Requisitos Técnicos](#requisitos-técnicos)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Arquitectura de Archivos](#arquitectura-de-archivos)
4. [Tecnologías Utilizadas](#tecnologías-utilizadas)
5. [Sistema de Autenticación](#sistema-de-autenticación)
6. [LocalStorage y Datos](#localstorage-y-datos)
7. [Funcionalidades Principales](#funcionalidades-principales)
8. [Guía de Mantenimiento](#guía-de-mantenimiento)
9. [Troubleshooting](#troubleshooting)

---

## 🖥️ Requisitos Técnicos

- **Navegador:** Moderno (Chrome, Firefox, Safari, Edge)
- **JavaScript:** ES6+
- **CSS:** CSS3 con Flexbox y Grid
- **HTML:** HTML5
- **LocalStorage:** Habilitado en el navegador
- **No requiere:** Servidor backend, base de datos, dependencias externas

---

## 📂 Estructura del Proyecto

```
Nueva carpeta daza/
├── index.html              (Página principal)
├── login.html              (Página de ingreso - actual)
├── ingreso.html            (Página de ingreso - alternativa/legacy)
├── registrarse.html        (Página de registro)
├── perfil.html             (Página de perfil de usuario)
├── estilos.css             (Estilos globales de index.html)
├── login.css               (Estilos específicos del login)
├── login.js                (Lógica de autenticación del login)
├── registro.css            (Estilos del formulario de registro)
├── registro.html           (Formulario de registro alternativo - legacy)
├── registro.js             (Lógica de registro y cierre de sesión)
├── perfil.css              (Estilos del perfil)
├── perfil.js               (Lógica de carga del perfil)
├── auth.js                 (Autenticación en index.html y menú)
├── menu.js                 (Control del menú hamburguesa)
├── Video.mp4               (Video para la sección "Sobre mí")
└── gif.gif                 (GIF animado en página de registro)
```

---

## 🔧 Arquitectura de Archivos

### **Archivos HTML**

#### `index.html`
- Página principal/inicio
- Secciones: Inicio, Sobre mí, Planes, Testimonios, Contacto
- Header con menú hamburguesa
- Sistema de autenticación integrado
- Referencias: `estilos.css`, `auth.js`, `registro.js`, `menu.js`

#### `login.html`
- Formulario de ingreso mejorado
- Campos: Email y Contraseña
- Botón para mostrar/ocultar contraseña (👁️)
- Checkbox "Recuérdame"
- Enlace "¿Olvidaste tu contraseña?"
- Botones: Entrar, Cancelar
- Validación en tiempo real
- Referencias: `login.css`, `login.js` (defer)

#### `ingreso.html` (LEGACY/ALTERNATIVO)
- Página de ingreso alternativa (no se usa actualmente)
- Campos simples: usuario y password
- Botones: "ingresar" y "registrarse" con onclick
- Funciones onclick: `ingresar()` y `registrarse()`
- ⚠️ NOTA: `login.html` es la versión mejorada actualmente en uso
- Las funciones no están completamente implementadas

#### `registrarse.html`
- Formulario de registro completo
- Campos personales: nombre, apellido, edad, peso, altura, etc.
- Validación de confirmación de contraseña
- Selector de género (radio buttons)
- Selector de ciudad (dropdown)
- GIF animado en la parte superior
- Formulario ID: `registroForm`
- Referencias: `registro.css`, `registro.js`

#### `perfil.html`
- Muestra datos del usuario logueado
- Secciones: Información Personal, Información Física
- Botón para cerrar sesión
- Redirección automática si no hay sesión activa
- Referencias: `perfil.css`, `perfil.js`

---

### **Archivos CSS**

#### `estilos.css`
Estilos globales de la aplicación:
- **Reset:** Box-sizing, márgenes, padding a 0
- **Header:** Navbar sticky, logo amarillo (#ffcc00), botones de autenticación
- **Secciones:** Inicio, sobre, planes, testimonios, contacto
- **Menú hamburguesa:** Animación 0.4s, icono con 3 líneas
- **Sidebar:** Ancho 260px, desliza desde la derecha, z-index 2000
- **Overlay:** Fondo semitransparente (rgba(0,0,0,0.5)), z-index 1500
- **Responsividad:** Flexbox y Grid
- **Paleta de colores:** 
  - Amarillo: #ffcc00
  - Naranja: #ff8800
  - Gris oscuro: #111, #222
- **Transiciones:** 0.3s - 0.5s ease

#### `login.css`
Estilos específicos del login:
- **Variables CSS:** --bg-dark, --card-dark, --accent (#ff7a00)
- **Tarjeta de login:** Centrada, max-width 420px, backdrop-filter blur
- **Campo contraseña:** Wrapper con botón ojo 👁️ posicionado
- **Gradientes:** Naranja neón (#ff7a00 a #ff9b3c)
- **Focus effects:** Border naranja, glow box-shadow
- **Animación:** fadeIn 0.7s ease
- **Tema:** Oscuro con acentos naranja neón

#### `registro.css`
Estilos del formulario de registro:
- **Fondo:** Imagen de gym (background-image URL)
- **Filtro:** brightness(0.7) para oscurecer
- **Contenedor:** 450px ancho, transparencia 0.9, backdrop-filter blur
- **Grid:** Formulario en 3 columnas (.row)
- **Inputs:** Borde verde (#4CAF50), focus naranja (#ff6f00)
- **Botones:** Naranja (#ff6f00), hover scale(1.1)
- **Género:** Radio buttons con accent-color verde
- **GIF:** 150px, borde verde, box-shadow
- **Transiciones:** all 0.3s ease

#### `perfil.css`
Estilos de la página de perfil:
- **Body:** Flex centrado, fondo #0d0d0d
- **Contenedor:** 480px ancho, padding 30px, border-radius 14px
- **Animación:** fadeIn 0.5s ease-in-out
- **Títulos:** Naranja (#ffa200, #ffd000, #ff8c1a)
- **Secciones:** Background #1c1c1c, padding 15-20px
- **Botón:** Gradiente naranja (45deg #ff6a00 a #ff9900)
- **Hover botón:** Gradiente invertido, scale(1.03)
- **Box-shadow:** Con brillo naranja (rgba(255, 165, 0, 0.15))

---

### **Archivos JavaScript**

#### `auth.js`
**Responsabilidades:**
- Control del menú hamburguesa
- Verificación de login en página principal
- Mostrar/ocultar botones según estado de sesión
- Activar botones de planes para usuarios logueados

**Funciones principales:**
```javascript
// Menú hamburguesa
document.getElementById("menuToggle").addEventListener("click", function () {
    document.getElementById("sideMenu").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
});

// Verificación de sesión
if (login === "1" && usuarioNombre) {
    authLinks.style.display = "none";
    userInfo.style.display = "flex";
    activarBotonesDePlanes();
}

// Activar botones
function activarBotonesDePlanes() {
    let botonesPlanes = document.querySelectorAll(".planes button");
    botonesPlanes.forEach(btn => {
        btn.addEventListener("click", function () {
            window.location.href = "perfil.html";
        });
    });
}
```

#### `login.js`
**Responsabilidades:**
- Validación de credenciales
- Búsqueda de usuario en localStorage
- Almacenamiento de sesión activa
- Toggle de visibilidad de contraseña
- Limpieza de campos

**Funciones principales:**
```javascript
// Evento de formulario
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let usuario = usuarios.find(user => 
        user.email === email && user.password === password
    );
    
    if (usuario) {
        localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
        localStorage.setItem("login", "1");
        localStorage.setItem("usuario", usuario.nombre + " " + usuario.apellido);
        window.location.href = "index.html";
    } else {
        alert("Correo o contraseña incorrectos");
    }
});

// Toggle de contraseña
togglePassword.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    togglePassword.textContent = type === "password" ? "👁️" : "🙈";
});

// Limpiar campos
function limpiarCamposLogin() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}
```

**Datos guardados en localStorage:**
- `login`: "1" si está logueado
- `usuario`: Nombre completo del usuario
- `usuarioActivo`: Objeto JSON con todos los datos del usuario

#### `registro.js`
**Responsabilidades:**
- Validación de formulario de registro
- Verificación de campos completos
- Comparación de contraseñas
- Almacenamiento de nuevo usuario
- Función para cerrar sesión

**Validaciones:**
```javascript
// Todos los campos requeridos
if (!nombre || !apellido || !edad || !weight || !height || !date || 
    !genero || !telefono || !ciudad || !email || !password || 
    !confirm_password) {
    alert("Por favor completa todos los campos antes de registrarte.");
    return;
}

// Contraseñas coinciden
if (password !== confirm_password) {
    alert("Las contraseñas no coinciden");
    return;
}

// Guardar usuario
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let usuario = {
    nombre, apellido, edad, weight, height, date, 
    genero, telefono, ciudad, email, password
};
usuarios.push(usuario);
localStorage.setItem("usuarios", JSON.stringify(usuarios));
```

**Función cerrarSesión:**
```javascript
function salir() {
    localStorage.setItem("login", "0");
    localStorage.setItem("usuario", "");
    localStorage.removeItem("usuarioActivo");
    location.href = "index.html";
}
```

#### `perfil.js`
**Responsabilidades:**
- Verificar sesión activa
- Redirigir automáticamente si no hay usuario logueado
- Cargar todos los datos del usuario en el HTML
- Mostrar nombre en el header (si existe elemento)
- Configurar evento del botón de cerrar sesión

**Flujo completo:**
```javascript
// 1. Obtener usuario activo
let usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

// 2. Validar sesión
if (!usuarioActivo) {
    alert("No estás logueado. Redirigiendo al login.");
    window.location.href = "login.html";
    return;
}

// 3. Mostrar nombre en header (si existe)
if (document.getElementById("usuarioNombre")) {
    document.getElementById("usuarioNombre").textContent = usuarioActivo.nombre || "Invitado";
}

// 4. Rellenar campos del perfil
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

Object.keys(campos).forEach(id => {
    let elemento = document.getElementById(id);
    if (elemento) elemento.textContent = campos[id];
});

// 5. Botón cerrar sesión
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
```

**Mapeo de datos:**
- `usuarioActivo.weight` → elemento con ID `peso`
- `usuarioActivo.height` → elemento con ID `altura`
- `usuarioActivo.date` → elemento con ID `fecha-nacimiento`

#### `menu.js`
**Responsabilidades:**
- Control del menú hamburguesa
- Toggle de clases activas
- Control del overlay
- Cierre del menú al hacer clic en overlay

**Lógica:**
```javascript
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  // Click en hamburguesa
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    sideMenu.classList.toggle("open");
    overlay.classList.toggle("show");
  });

  // Click en overlay cierra menú
  overlay.addEventListener("click", () => {
    toggle.classList.remove("active");
    sideMenu.classList.remove("open");
    overlay.classList.remove("show");
  });
});
```

**Clases CSS afectadas:**
- `.menu-toggle.active` - Icono animado (45deg rotación)
- `.side-menu.open` - Sidebar deslizado (right: 0)
- `.overlay.show` - Overlay visible (display: block)

---

### **Archivos Multimedia**

#### `Video.mp4`
- Video de fondo para la sección "Sobre mí"
- Reproducción automática (autoplay)
- Silenciado (muted)
- Bucle infinito (loop)
- Reproducción responsive (playsinline)
- Ubicación en HTML: línea ~76 en `index.html`
- Objeto-fit: cover para llenar el contenedor

#### `gif.gif`
- GIF animado usado en la página de registro
- Inserción en `registrarse.html` con clase `.gif-esquina`
- Dimensiones: 150px × auto
- Borde verde (#4CAF50) de 3px
- Box-shadow para efecto de profundidad
- Margen superior e inferior de 20px
- Border-radius: 10px
- Ubicación: Dentro del div `.contenedor`, antes del formulario

---

## 🔐 Sistema de Autenticación

### Flujo de Autenticación

#### **Registro (registrarse.html)**
1. Usuario completa formulario con datos personales
2. Se validan todos los campos (12 campos requeridos)
3. Se verifica que contraseñas coincidan
4. Nuevo usuario se agrega a `localStorage['usuarios']` como array JSON
5. Redirección a `login.html`
6. Alert: "Usuario registrado con éxito"

#### **Login (login.html)**
1. Usuario ingresa email y contraseña
2. Se busca coincidencia en `localStorage['usuarios']`
3. Si existe, se guardan en localStorage:
   - `login`: "1"
   - `usuario`: nombre + apellido
   - `usuarioActivo`: objeto JSON completo
4. Redirección a `index.html`
5. Alert: "Acceso correcto, bienvenido [Nombre]"

#### **Verificación de Sesión**
- En `index.html`: revisa si `login === "1"` mediante `auth.js`
- En `perfil.html`: valida existencia de `usuarioActivo` mediante `perfil.js`
- Si no hay sesión, redirige a `login.html` con alert

#### **Cierre de Sesión**
- Elimina `login`, `usuario`, `usuarioActivo` de localStorage
- Redirige a `index.html`
- Alert: "Has cerrado sesión."

---

## 💾 LocalStorage y Datos

### Estructura de Datos en LocalStorage

#### Array de Usuarios
```json
localStorage['usuarios'] = [
  {
    "nombre": "Juan",
    "apellido": "Pérez",
    "edad": "25",
    "weight": "75",
    "height": "1.75",
    "date": "2000-01-15",
    "genero": "masculino",
    "telefono": "3001234567",
    "ciudad": "Bogotá",
    "email": "juan@example.com",
    "password": "securepass123"
  },
  ...
]
```

#### Usuario Activo
```json
localStorage['usuarioActivo'] = { ...usuario_object }
localStorage['login'] = "1"
localStorage['usuario'] = "Juan Pérez"
```

### Limitaciones
- **Almacenamiento:** ~5-10MB por dominio
- **Privacidad:** Las contraseñas están en texto plano (NO usar en producción)
- **Sincronización:** Solo local, sin respaldo o sincronización entre dispositivos
- **Persistencia:** Los datos persisten hasta que se limpie el cache/cookies

---

## ⚙️ Funcionalidades Principales

### 1. **Menú Hamburguesa Animado**
- Icono con 3 líneas que giran 45° al hacer clic
- Sidebar deslizable desde la derecha (260px ancho)
- Overlay oscuro semi-transparente
- Enlaces de navegación internos: Inicio, Sobre mí, Planes, Testimonios, Contacto
- Cierre al hacer clic en overlay
- Z-index: menú 2000, overlay 1500

**Clases CSS utilizadas:**
- `.menu-toggle.active` - Icono activado
- `.side-menu.open` - Sidebar visible
- `.overlay.show` - Overlay visible

### 2. **Sistema de Autenticación**
- Registro con validaciones completas
- Login con búsqueda de usuario
- Sesiones persistentes en localStorage
- Cierre de sesión con limpieza de datos
- Protección de rutas (perfil requiere sesión)

### 3. **Página de Perfil**
- Muestra datos del usuario logueado
- Dos secciones: Información Personal (7 campos) e Información Física (3 campos)
- Protección con redirección automática
- Botón de cerrar sesión con estilos destacados
- Animación fadeIn al cargar

### 4. **Planes de Entrenamiento**
- Tres planes disponibles: Inicial, Pro, Élite
- Botones interactivos (solo activos si está logueado)
- Plan Pro destacado con borde naranja (#ffcc00)
- Redirige a perfil al hacer clic
- Diseño con hover effects (translateY -5px)

### 5. **Secciones Principales**
- **Inicio:** Hero con imagen de fondo, CTA "Ver Planes"
- **Sobre mí:** Video background (Video.mp4), overlay con texto
- **Planes:** Grid de 3 planes, responsivo
- **Testimonios:** Tarjetas con avatares, efectos hover
- **Contacto:** Formulario básico (nombre, email, mensaje)
- **Footer:** Texto de derechos reservados

---

## 🔧 Guía de Mantenimiento

### Agregar Nuevo Usuario Manualmente
```javascript
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
usuarios.push({
  nombre: "Nuevo",
  apellido: "Usuario",
  email: "nuevo@example.com",
  password: "pass123",
  edad: "30",
  weight: "80",
  height: "1.80",
  date: "1995-01-01",
  genero: "masculino",
  telefono: "3001234567",
  ciudad: "Bogotá"
});
localStorage.setItem("usuarios", JSON.stringify(usuarios));
```

### Limpiar LocalStorage
```javascript
localStorage.clear(); // Elimina todo

// O específico:
localStorage.removeItem("usuarios");
localStorage.removeItem("login");
localStorage.removeItem("usuario");
localStorage.removeItem("usuarioActivo");
```

### Ver Contenido de LocalStorage en Consola
```javascript
console.log(JSON.parse(localStorage.getItem("usuarios")));
console.log(JSON.parse(localStorage.getItem("usuarioActivo")));
```

### Modificar Tema de Colores
Actualizar en `estilos.css`:
```css
.logo { color: #ffcc00; }        /* Amarillo principal */
.btn-auth:hover { color: #ffcc00; }
.bienvenido { color: #ff8800; }  /* Naranja */
h2 { color: #ffcc00; }           /* Títulos */
```

O en `login.css` (variables):
```css
:root {
  --accent: #ff7a00;         /* Naranja neón */
  --accent-light: #ff9b3c;   /* Naranja claro */
}
```

### Agregar Nueva Página
1. Crear `nueva-pagina.html`
2. Importar estilos necesarios: `<link rel="stylesheet" href="estilos.css">`
3. Importar scripts: `<script src="auth.js" defer></script>`
4. Seguir estructura HTML5 existente
5. Agregar enlace en el menú (`index.html`)

### Cambiar Imágenes y Videos
- Hero inicio: `estilos.css` → `.inicio` background-image
- Video sobre mí: `index.html` línea ~76 → `src="Video.mp4"`
- Fondo planes: `estilos.css` → `.planes` background-image
- GIF registro: `registrarse.html` → `<img src="gif.gif">`

### Validaciones de Registro
Campos requeridos (12 totales):
```
1. nombre (text)
2. apellido (text)
3. edad (number)
4. weight (number)
5. height (number)
6. date (date)
7. genero (radio)
8. telefono (number)
9. ciudad (select)
10. email (email)
11. password (password)
12. confirm_password (password)
```

---

## 🔍 Troubleshooting

### Problema: Login no funciona
**Soluciones:**
1. Verificar que localStorage está habilitado (F12 → Application → localStorage)
2. Revisar consola (F12 → Console) para errores
3. Verificar que el usuario existe: `console.log(JSON.parse(localStorage.getItem('usuarios')))`
4. Comprobar que email y contraseña coinciden exactamente (mayúsculas)
5. Limpiar datos: `localStorage.clear()` y registrarse nuevamente

### Problema: No se muestra bienvenida después del login
**Soluciones:**
1. Verificar que `localStorage['login']` = "1": `console.log(localStorage.getItem('login'))`
2. Revisar que `localStorage['usuario']` tiene valor
3. Refresca la página (F5)
4. Abre DevTools: F12 → Network → verifica que los archivos cargan correctamente

### Problema: Perfil muestra error de redirección
**Soluciones:**
1. Asegurarse de estar logueado
2. Verificar que `usuarioActivo` existe: `console.log(JSON.parse(localStorage.getItem('usuarioActivo')))`
3. Verificar que el registro fue completado correctamente
4. No usar modo incógnito (los datos se borran al cerrar)

### Problema: Menú hamburguesa no funciona
**Soluciones:**
1. Verificar que `menu.js` está cargado en `index.html` (F12 → Network)
2. Revisar en consola (F12 → Console) si hay errores de JavaScript
3. Confirmar que los IDs HTML coinciden: `menuToggle`, `sideMenu`, `overlay`
4. Verificar que los tres elementos existen en el HTML

### Problema: Estilos no se aplican
**Soluciones:**
1. Limpiar caché del navegador (Ctrl+Shift+Supr)
2. Verificar ruta correcta del CSS en `<link rel="stylesheet" href="estilos.css">`
3. Revisar que no hay conflictos de especificidad CSS
4. Abrir consola (F12) → Pestaña Network para ver si los archivos cargan
5. Desactivar extensiones del navegador que puedan interferir

### Problema: Videos/GIF no cargan
**Soluciones:**
1. Verificar que `Video.mp4` y `gif.gif` están en la misma carpeta
2. Revisar rutas relativas en HTML: `src="Video.mp4"`
3. Verificar formato de video: MP4 con codec H.264
4. Comprobar permisos de archivo
5. Ver en consola (F12) si hay errores de CORS

### Problema: LocalStorage lleno
**Solución:**
```javascript
// Ver tamaño
console.log(new Blob(Object.values(localStorage)).size)

// Limpiar usuarios innecesarios
localStorage.removeItem("usuarios");
```

### Problema: Datos no se guardan en localStorage
**Soluciones:**
1. Verificar que JavaScript está habilitado
2. Comprobar que no se está usando modo incógnito
3. Verificar cuota de storage disponible
4. Revisar permisos del navegador
5. Intentar en otro navegador

---

## 📋 Checklist de Desarrollo

- [ ] Cambiar contraseña hardcodeada por hash (MD5/SHA256)
- [ ] Agregar validación de email más robusta
- [ ] Implementar backend para persistencia de datos
- [ ] Agregar CAPTCHA en registro
- [ ] Implementar recuperación de contraseña
- [ ] Agregar 2FA (autenticación de dos factores)
- [ ] Optimizar imágenes y videos
- [ ] Mejorar accesibilidad (ARIA labels)
- [ ] Agregar tests unitarios
- [ ] Implementar PWA (Progressive Web App)
- [ ] Agregar notificaciones push
- [ ] Implementar sistema de planes dinámico
- [ ] Agregar historial de cambios de peso/altura
- [ ] Crear dashboard de seguimiento

---

## 📞 Contacto y Soporte

Para reportar problemas técnicos o sugerencias, contactar al equipo de desarrollo.

**Última actualización:** Noviembre 2025
