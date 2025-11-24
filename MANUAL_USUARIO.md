# 📖 MANUAL DE USUARIO - Santiago Herrera Fit

**Versión:** 1.0  
**Fecha:** 2025

---

## 📑 Tabla de Contenidos

1. [Introducción](#introducción)
2. [Empezando](#empezando)
3. [Registro](#registro)
4. [Iniciar Sesión](#iniciar-sesión)
5. [Explorar la Plataforma](#explorar-la-plataforma)
6. [Mi Perfil](#mi-perfil)
7. [Planes de Entrenamiento](#planes-de-entrenamiento)
8. [Preguntas Frecuentes](#preguntas-frecuentes)
9. [Soporte](#soporte)

---

## 👋 Introducción

¡Bienvenido a **Santiago Herrera Fit**! 

Esta es una plataforma de entrenamiento personalizado donde puedes:
- ✅ Registrarte con tus datos personales
- ✅ Acceder a planes de entrenamiento personalizados
- ✅ Ver tu perfil y gestionar tu información
- ✅ Explorar testimonios de clientes satisfechos
- ✅ Contactar directamente con Santiago
- ✅ Navegación fácil mediante menú hamburguesa

---

## 🚀 Empezando

### Primer Vistazo

Cuando abres la aplicación, ves:
1. **Header (Encabezado):** Logo de Santiago Herrera Fit (🏋️‍♂️), botones de login/registro
2. **Menú Hamburguesa:** Icono ☰ (tres líneas) en la esquina superior derecha
3. **Secciones principales:** Inicio, Sobre mí, Planes, Testimonios, Contacto
4. **Footer:** Información de derechos reservados

### Navegación

**Opción 1: Links del Header**
- Click en "Iniciar sesión" para entrar
- Click en "Registrarse" para crear cuenta
- Click en "Perfil" (si ya estás logueado)

**Opción 2: Menú Hamburguesa**
- Click en el icono ☰ (tres líneas) en la esquina superior derecha
- Se abre un menú lateral con opciones de navegación
- Opciones: Inicio, Sobre mí, Planes, Testimonios, Contacto
- Click en la pantalla oscura (overlay) para cerrar el menú

**Opción 3: Botones de la Página**
- Botón "Ver Planes" en la sección Inicio para ir a Planes
- Botones "Empezar", "Unirme", "Inscribirme" en cada plan (requiere login)

**Opción 4: Scroll Suave**
- Toda la navegación tiene scroll suave integrado
- Haz click en cualquier enlace y se deslizará automáticamente

---

## 📝 Registro

### ¿Cómo Registrarse?

**Paso 1: Acceder a Registro**
1. Click en el botón "Registrarse" del header
2. O usa el enlace "¿No tienes cuenta? Regístrate" desde el login
3. Serás dirigido a `registrarse.html` (versión completa)

**Paso 2: Completar el Formulario**

El formulario está organizado en 3 columnas con un GIF animado de gym en la parte superior.

**Columna 1 - Información Básica:**

| Campo | Tipo | Descripción | Requerido |
|-------|------|-------------|-----------|
| **Nombres** | Texto | Tu nombre completo | ✅ Sí |
| **Apellidos** | Texto | Tus apellidos | ✅ Sí |
| **Peso** | Número | Tu peso en kilogramos (kg) | ✅ Sí |
| **Altura** | Número | Tu altura en metros (m, ej: 1.75) | ✅ Sí |
| **Ciudad** | Selector | Elige: Bucaramanga, Bogotá, Cúcuta, Medellín | ✅ Sí |

**Columna 2 - Más Información:**

| Campo | Tipo | Descripción | Requerido |
|-------|------|-------------|-----------|
| **Fecha de nacimiento** | Fecha | Tu fecha de nacimiento | ✅ Sí |
| **Teléfono** | Número | Tu número de contacto | ✅ Sí |

**Columna 3 - Género y Edad:**

| Campo | Tipo | Descripción | Requerido |
|-------|------|-------------|-----------|
| **Edad** | Número | Tu edad actual | ✅ Sí |
| **Género** | Radio | Selecciona: Femenino ⭕, Masculino ⭕, Otro ⭕ | ✅ Sí |

**Sección Final - Credenciales:**

| Campo | Tipo | Descripción | Requerido |
|-------|------|-------------|-----------|
| **Correo electrónico** | Email | Tu email (será tu usuario para login) | ✅ Sí |
| **Contraseña** | Contraseña | Crea una contraseña segura | ✅ Sí |
| **Confirmar Contraseña** | Contraseña | Repite tu contraseña exactamente | ✅ Sí |

**Total: 12 campos requeridos**

**Paso 3: Validaciones**
- ❌ **No puedes dejar campos vacíos:** Recibirás un alert: "Por favor completa todos los campos antes de registrarte."
- ❌ **Las contraseñas deben coincidir:** Si no coinciden: "Las contraseñas no coinciden"
- ✅ **Si todo está bien:** "Usuario registrado con éxito"

**Paso 4: Acceder a Login**
- Después del registro exitoso, serás redirigido automáticamente a `login.html`
- Ahora puedes ingresar con tu email y contraseña

**Paso 5: Botones Disponibles**
- **"Registrar":** Botón naranja (#ff6f00) para completar el registro
- **"Salir":** Botón marrón para volver atrás

---

## 🔐 Iniciar Sesión

### ¿Cómo Entrar a tu Cuenta?

La plataforma tiene dos opciones de login:

#### **Opción Principal: login.html** ⭐ (RECOMENDADO)

**Paso 1: Acceder a Login**
1. Click en "Iniciar sesión" del header
2. O desde el enlace en página de registro
3. Serás dirigido a `login.html` (versión mejorada y recomendada)

**Paso 2: Ingresar Credenciales**

**Campo 1 - Email:**
- Ingresa el email exacto que usaste en el registro
- Campo de texto estándar
- Validación: Debe coincidir con el email registrado

**Campo 2 - Contraseña:**
- Ingresa tu contraseña exactamente (mayúsculas/minúsculas importan)
- Inicialmente oculta por seguridad
- Click en el botón **ojo 👁️** para mostrar/ocultar la contraseña
- Cambio entre 👁️ (oculto) y 🙈 (visible)

**Paso 3: Opciones Adicionales**
- ☑️ **Recuérdame:** Checkbox para mantener sesión abierta (opcional)
- 🔗 **¿Olvidaste tu contraseña?** Enlace de recuperación (futuro)

**Paso 4: Ingresar**
- Click en el botón **"Entrar"** (fondo naranja #ff7a00)
- Si los datos son correctos:
  - Serás redirigido a `index.html`
  - Verás un alert: "Acceso correcto, bienvenido [Tu Nombre]"
- Si son incorrectos:
  - Alert: "Correo o contraseña incorrectos"
  - Permaneces en la página

**Paso 5: Opciones Adicionales en Login**
- Click **"Cancelar"** te regresa a `index.html`
- Click **"Limpiar campos"** te borra lo que escribiste
- Link "¿No tienes cuenta? Regístrate" para ir a registro

#### **Opción Alternativa: ingreso.html** (LEGACY - ⚠️ No recomendado)

Esta es una versión antigua del formulario de login:
- Campos simples: usuario y password
- Botones básicos con onclick
- UI menos moderna y funcional
- ⚠️ **Nota:** Los botones no funcionan completamente
- Se mantiene por compatibilidad con código anterior

**Recomendación:** Usa siempre `login.html` para mejor experiencia, seguridad y funcionalidad.

**Paso 6: Señales de que Estás Logueado**
- ✅ Botones "Iniciar sesión" y "Registrarse" desaparecen del header
- ✅ Aparece tu nombre en el header: "Bienvenido, [Tu Nombre]"
- ✅ Aparece botón "Perfil" en el header (color naranja)
- ✅ Los botones de planes ("Empezar", "Unirme", "Inscribirme") ahora son funcionales
- ✅ Puedes acceder a tu perfil

---

## 🌐 Explorar la Plataforma

### Secciones Disponibles

#### 1. **Inicio (Hero)**
- **Frase principal:** "Transforma tu cuerpo con Santiago Herrera"
- **Descripción:** "Entrenamiento personalizado, nutrición y motivación para lograr tu mejor versión."
- **Botón CTA:** "Ver Planes" (amarillo #ffcc00)
- **Fondo:** Imagen inspiradora de entrenamiento personal
- **Scroll automático** a la sección de Planes

#### 2. **Sobre Mí**
- **Video de fondo:** Video.mp4 con autoplay, silenciado, bucle infinito
- **Overlay oscuro:** Para mejor legibilidad del texto
- **Contenido:**
  - Título: "Sobre mí"
  - Presentación: "¡Hola! Soy Santiago Herrera, entrenador personal certificado"
  - Experiencia: "Más de 5 años de experiencia"
  - Promesa: "He ayudado a transformar a cientos de personas"
- **Altura:** Pantalla completa (100vh)

#### 3. **Planes de Entrenamiento**
Ver la sección [Planes de Entrenamiento](#planes-de-entrenamiento)

#### 4. **Testimonios**
- **Título:** "Testimonios"
- **3 Testimonios con:**
  - Foto de perfil redonda (90px)
  - Comentario entrecomillado
  - Nombre del cliente
  - Borde naranja (#ffcc00) en foto
  - Efectos hover: Elevar tarjeta (translateY -5px)
  - Sombra al pasar el mouse

**Testimonios incluidos:**
1. **Laura G.:** "Gracias a Santiago logré mejorar mi salud y autoestima. 100% recomendado."
2. **Andrés P.:** "Las rutinas son personalizadas y el seguimiento es excelente."
3. **Carlos M.:** "Entrenar con Santiago me cambió la vida, ahora tengo más energía y disciplina."

#### 5. **Contacto**
- **Título:** "Contáctame"
- **Formulario con 3 campos:**
  1. Nombre (texto requerido)
  2. Correo (email requerido)
  3. Mensaje (textarea requerido)
- **Botón:** "Enviar" (amarillo #ffcc00)
- **Nota:** Actualmente es un formulario visual (sin backend)

#### 6. **Footer**
- Texto: "&copy; 2025 Santiago Herrera Fit | Todos los derechos reservados"
- Fondo negro (#000)
- Texto gris (#aaa)
- Tamaño pequeño (0.9em)

---

## 💪 Planes de Entrenamiento

### Planes Disponibles

#### **Plan Inicial - $80,000/mes**
- ✅ Rutina básica personalizada
- ✅ Guía nutricional
- ✅ Seguimiento mensual
- 📌 **Ideal para:** Principiantes que inician su viaje fitness
- **Botón:** "Empezar"

#### **Plan Pro - $450,000/mes** ⭐ (RECOMENDADO)
- ✅ Entrenamiento personalizado completo
- ✅ Plan de alimentación detallado
- ✅ Control semanal de progreso
- ✅ Ajustes mensuales según resultados
- 📌 **Ideal para:** Usuarios comprometidos con resultados
- **Diseño:** Borde naranja (#ffcc00) - Plan destacado
- **Botón:** "Unirme"

#### **Plan Élite - $300,000/mes**
- ✅ Entrenamiento VIP personalizado
- ✅ Videollamadas de seguimiento
- ✅ Soporte 24/7
- ✅ Plan nutricional avanzado
- 📌 **Ideal para:** Usuarios de alto rendimiento
- **Botón:** "Inscribirme"

### ¿Cómo Seleccionar un Plan?

**Para Usuarios Sin Sesión:**
1. Click en cualquiera de los botones ("Empezar", "Unirme", "Inscribirme")
2. Alert: Serás redirigido a la página de login
3. Deberás crear cuenta o iniciar sesión
4. Después de loguearte, vuelve a los planes

**Para Usuarios Logueados:**
1. Click directamente en el botón del plan deseado
2. Serás redirigido automáticamente a `perfil.html`
3. Podrás ver tu información completa y confirmación del plan
4. Ya estás inscrito en tu plan elegido

### Grid de Planes
- Diseño responsivo: 3 columnas en desktop, ajusta en móviles
- Espaciado: 50px entre tarjetas
- Efecto hover: Las tarjetas suben 5px (translateY: -5px)
- Sombra: Al pasar el mouse aparece sombra sutil

---

## 👤 Mi Perfil

### Acceder a Mi Perfil

**Opción 1:** Click en botón "Perfil" del header (si estás logueado) - Botón naranja  
**Opción 2:** Click en plan de entrenamiento cuando estás logueado (redirige automáticamente)  
**Opción 3:** URL directo: `perfil.html` (si tienes sesión activa)

### Validación de Sesión
- Si **NO estás logueado:**
  - Alert: "No estás logueado. Redirigiendo al login."
  - Serás redirigido a `login.html`
  
- Si **SÍ estás logueado:**
  - Se carga tu perfil completo
  - Animación suave: fadeIn 0.5s

### ¿Qué Ves en tu Perfil?

#### **Sección 1: Información Personal** (7 campos)
- **Nombre:** Tu nombre registrado
- **Apellido:** Tu apellido registrado
- **Edad:** Tu edad
- **Ciudad:** Tu ciudad seleccionada
- **Teléfono:** Tu número de contacto
- **Género:** Género seleccionado (Femenino/Masculino/Otro)
- **Email:** Tu correo electrónico

#### **Sección 2: Información Física** (3 campos)
- **Peso:** Tu peso en kilogramos
- **Altura:** Tu altura en metros
- **Fecha de Nacimiento:** Tu fecha de nacimiento

### Diseño del Perfil
- **Contenedor:** 480px ancho, fondo oscuro (#121212)
- **Secciones:** Cards con fondo #1c1c1c
- **Títulos:** Naranja (#ffa200, #ffd000, #ff8c1a)
- **Labels:** Amarillo claro (#ffe09d)
- **Animación:** Entrada suave fadeIn 0.5s

### Opciones en el Perfil

**Botón "Cerrar sesión"**
- Botón naranja con gradiente: 45deg #ff6a00 a #ff9900
- Al pasar el mouse: Gradiente invertido, escala 1.03
- **Acción:**
  - Elimina todos tus datos de la sesión
  - Limpia: `usuarioActivo`, `login`, `usuario`
  - Alert: "Has cerrado sesión."
  - Redirige a `index.html`
  - Vuelves a ser usuario anónimo

### Datos que NO puedes Editar
- ⚠️ Actualmente, los datos no son editables
- Para cambiar información, deberás:
  - Contactar directamente a Santiago
  - Crear una nueva cuenta con los datos correctos

---

## ❓ Preguntas Frecuentes

### **P: ¿Puedo cambiar mi contraseña?**
R: Actualmente no hay opción de cambiar contraseña desde la plataforma. Si olvidas tu contraseña, deberás crear una nueva cuenta. Se está trabajando en una función de recuperación.

### **P: ¿Puedo editar mis datos de perfil?**
R: No, los datos se guardan como estáticos después del registro. Para cambiar información, deberá contactar a Santiago directamente vía formulario de contacto.

### **P: ¿Dónde se guardan mis datos?**
R: Tus datos se almacenan localmente en tu navegador usando `localStorage`. Esto significa que cada navegador tiene su propia base de datos independiente.

### **P: ¿Si cambio de navegador, pierdo mis datos?**
R: Sí. Si usas Chrome, después usas Firefox, no verás tus datos en Firefox. Los datos son específicos de cada navegador.

### **P: ¿Qué pasa si elimino mis cookies?**
R: Se borrará tu sesión activa. Tendrás que volver a iniciar sesión, pero tu cuenta seguirá existiendo si no limpias el localStorage.

### **P: ¿Puedo tener varias cuentas?**
R: Sí, puedes registrar múltiples cuentas con diferentes emails. Cada una será independiente.

### **P: ¿Es segura esta plataforma?**
R: Esta es una versión de demostración. Las contraseñas se guardan en texto plano (NO encriptadas). Para usar datos sensibles en producción, se requiere un backend seguro.

### **P: ¿Qué navegadores funcionan?**
R: Chrome, Firefox, Safari, Edge y cualquier navegador moderno con:
- JavaScript habilitado
- LocalStorage habilitado
- HTML5 y CSS3 soportados

### **P: ¿Puedo usar la app en móvil?**
R: ✅ **SÍ**, la plataforma es completamente responsiva:
- Diseño adaptable para móviles
- Menú hamburguesa optimizado para pantallas pequeñas
- Todos los formularios funcionan en móvil
- Recomendado: Usar en portrait mode

### **P: ¿Cómo contacto a Santiago directamente?**
R: Usa el formulario de **"Contacto"** en la página principal. Completa:
- Tu nombre
- Tu email
- Tu mensaje
- Click en "Enviar"

### **P: ¿Qué ocurre si olvido mi contraseña?**
R: Actualmente no hay opción de recuperación automática. Opciones:
1. Crear una nueva cuenta con otro email
2. Contactar a Santiago para reseteo manual

### **P: ¿Puedo ver a otros usuarios?**
R: No, cada usuario solo ve su propia información de perfil. No hay directorio de usuarios.

### **P: ¿Los datos se sincronizan entre dispositivos?**
R: No. Los datos se guardan solo localmente. Si accedes desde otro dispositivo, no verás tus datos.

### **P: ¿Puedo descargar mis datos?**
R: No directamente desde la UI. Pero puedes acceder en la consola:
```javascript
// Copiar en consola
JSON.stringify(JSON.parse(localStorage.getItem("usuarioActivo")), null, 2)
```

### **P: ¿Cuánto tiempo dura la sesión?**
R: Indefinidamente hasta que:
- Clicks "Cerrar sesión"
- Limpies el navegador
- Desinstales la app (si es PWA)

### **P: ¿Puedo usar dos cuentas a la vez?**
R: No, solo puedes tener una sesión activa. Si inicias sesión con otra cuenta, la anterior se cierra.

---

## 🆘 Soporte

### Problemas Comunes y Soluciones

#### **No puedo iniciar sesión**
1. ✓ Verifica que escribiste correctamente el email (sin espacios)
2. ✓ Verifica que la contraseña es correcta (mayúsculas/minúsculas importan)
3. ✓ Asegúrate de haber completado el registro correctamente
4. ✓ Prueba limpiar caché del navegador (Ctrl+Shift+Supr)
5. ✓ Prueba en otro navegador
6. ✓ Contacta a Santiago si persiste el problema

#### **No me aparece la bienvenida después de login**
1. ✓ Refresca la página (F5 o Ctrl+R)
2. ✓ Cierra sesión y vuelve a iniciar
3. ✓ Prueba con otro navegador
4. ✓ Abre DevTools (F12) y verifica en Console que no hay errores

#### **El menú hamburguesa no funciona**
1. ✓ Verifica que JavaScript esté habilitado
2. ✓ Actualiza la página (Ctrl+R)
3. ✓ Prueba con otro navegador
4. ✓ Limpia caché y cookies

#### **Mis datos no se guardan**
1. ✓ Verifica que LocalStorage esté habilitado (F12 → Application → LocalStorage)
2. ✓ Comprueba que no estás en modo incógnito (los datos se borran al cerrar)
3. ✓ Verifica espacio disponible en el navegador
4. ✓ Prueba con otro navegador

#### **Veo mensaje de redirección en Perfil**
1. ✓ Debes estar logueado para ver tu perfil
2. ✓ Inicia sesión primero desde `login.html`
3. ✓ Luego accede a tu perfil
4. ✓ No uses modo incógnito

#### **Los videos/GIF no cargan**
1. ✓ Verifica conexión a internet
2. ✓ Abre DevTools (F12) → Network para ver si hay errores
3. ✓ Prueba en otro navegador
4. ✓ Limpia caché

#### **Los estilos no se ven correctamente**
1. ✓ Limpiar caché del navegador (Ctrl+Shift+Supr)
2. ✓ Refrescar página completa (Ctrl+F5)
3. ✓ Desactivar extensiones del navegador
4. ✓ Prueba en otro navegador

### Contacto de Soporte

📧 **Email:** contacto@santiagherrerafit.com  
📱 **Teléfono:** Disponible en el formulario de contacto  
💬 **Formulario de Contacto:** En la sección "Contacto" de la página principal

### Para Reportar Problemas
Incluye:
- Descripción del problema
- Navegador que usas (Chrome, Firefox, etc.)
- Pasos para reproducir el problema
- Screenshot si es posible

---

## 💡 Tips y Recomendaciones

1. **Seguridad:** 
   - No compartas tu contraseña con nadie
   - Cierra sesión después de usar en computadoras compartidas
   - No uses la app en redes WiFi públicas sin VPN

2. **Datos:** 
   - Ingresa datos precisos y completos en el registro
   - Verifica tu email antes de confirmar registro
   - Guarda una copia de tus datos

3. **Sesión:**
   - Cierra sesión si usas una computadora compartida
   - No uses modo incógnito para evitar perder datos
   - Entiende que los datos son locales a cada navegador

4. **Navegación:**
   - Usa el menú hamburguesa en móviles
   - Aprovecha el scroll suave entre secciones
   - Explora todos los planes disponibles

5. **Planes:**
   - Lee detenidamente los beneficios de cada plan
   - El Plan Pro es el más recomendado
   - Puedes cambiar de plan contactando a Santiago

6. **Contacto:**
   - Usa el formulario de contacto para comunicaciones
   - Sé específico en tus mensajes
   - Espera respuesta en 24-48 horas

---

## 📋 Checklist de Primer Uso

- [ ] He leído el Manual de Usuario completo
- [ ] He creado una cuenta exitosamente
- [ ] Puedo iniciar sesión correctamente
- [ ] Puedo cerrar sesión
- [ ] He explorado todas las secciones
- [ ] He visto mi perfil completo
- [ ] Entiendo los tres planes disponibles
- [ ] Sé cómo contactar a Santiago
- [ ] Entiendo la estructura de navegación

---

## 🎯 Próximos Pasos

1. **Registrate** si aún no tienes cuenta
2. **Explora** las diferentes secciones de la plataforma
3. **Lee** los testimonios y entiende el valor
4. **Elige** el plan que mejor se adapte a ti
5. **Contacta** a Santiago para comenzar tu transformación
6. **Sigue** el programa y alcanza tus objetivos fitness

---

## 📞 Información de Contacto

**Santiago Herrera Fit**  
Especialista en Entrenamiento Personalizado  
🏋️ Nutrición Personalizada  
🎯 Motivación Constante  
📞 Disponible 24/7 para consultas

---

## 🎉 ¡Gracias por elegir Santiago Herrera Fit!

Tu transformación comienza aquí. Estamos comprometidos en ayudarte a lograr tus objetivos fitness.

**Última actualización:** Noviembre 2025

---

## 📚 Recursos Adicionales

- Página principal: `index.html`
- Iniciar sesión: `login.html`
- Crear cuenta: `registrarse.html`
- Mi perfil: `perfil.html`
- Contacto: Formulario en página principal

**Nota:** Todos los formularios están disponibles sin requerir software adicional. Solo necesitas un navegador moderno.
