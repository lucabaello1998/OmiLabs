// ========== DATOS DE LOS MÓDULOS Y RETOS ==========
const modules = [
    {
        id: "basico",
        title: "🌱 Nivel Básico",
        unlockCondition: null,
        challenges: [
            {
                id: "basico-1",
                title: "Hola, Naomi 💜",
                description: "¡Bienvenida a tu primer reto! HTML es como el esqueleto de una página web. Vamos a crear un saludo personalizado usando etiquetas básicas. El &lt;h1&gt; es para títulos grandes y el &lt;p&gt; para párrafos.",
                learned: [
                    "Qué es una etiqueta HTML",
                    "Cómo usar &lt;h1&gt; para títulos",
                    "Cómo usar &lt;p&gt; para párrafos"
                ],
                initialCode: {
                    html: `<h1>¡Hola, Naomi!</h1>
<p>Este es mi primer código HTML 🎉</p>`,
                    css: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}`,
                    js: `// Aquí puedes agregar JavaScript después`
                },
                validate: function(doc) {
                    const h1 = doc.querySelector('h1');
                    const p = doc.querySelector('p');
                    
                    if (!h1) {
                        return { ok: false, message: "❌ Paso 1/2: Necesitas crear un título con la etiqueta <h1>. Ejemplo: <h1>¡Hola, Naomi!</h1>" };
                    }
                    if (!h1.textContent.toLowerCase().includes('naomi')) {
                        return { ok: false, message: "✅ Paso 1/2 OK | ❌ Paso 2/2: ¡El título debe incluir tu nombre 'Naomi'! Puedes escribir algo como '¡Hola, Naomi!' o 'Soy Naomi'" };
                    }
                    if (!p) {
                        return { ok: false, message: "✅ Pasos 1-2 OK | 💡 Extra: Agrega un párrafo con <p> para practicar más" };
                    }
                    return { ok: true, message: "🎉 ¡COMPLETADO! Ya sabes crear títulos y párrafos en HTML. ¡Eres increíble! Tu h1 tiene 'Naomi' y usaste párrafos. ✨" };
                }
            },
            {
                id: "basico-2",
                title: "Píntalo bonito 🎨",
                description: "¡Ahora viene la magia del CSS! CSS es como el maquillaje de tu página: le da color, estilo y personalidad. Vamos a cambiar colores para que tu página se vea hermosa. Usa 'background-color' para el fondo y 'color' para el texto.",
                learned: [
                    "Qué es CSS y para qué sirve",
                    "Cómo cambiar el color de fondo",
                    "Cómo cambiar el color del texto"
                ],
                initialCode: {
                    html: `<h1>Mi página colorida</h1>
<p>¡Los colores hacen todo más bonito!</p>`,
                    css: `body {
    background-color: white;
    padding: 20px;
}

h1 {
    color: black;
}`,
                    js: `// Sin JavaScript por ahora`
                },
                validate: function(doc) {
                    const body = doc.body;
                    const h1 = doc.querySelector('h1');
                    
                    if (!body || !h1) {
                        return { ok: false, message: "❌ Asegúrate de tener el HTML completo con <h1>" };
                    }
                    
                    const bodyBg = window.getComputedStyle(body).backgroundColor;
                    const h1Color = window.getComputedStyle(h1).color;
                    
                    if (bodyBg === 'rgba(0, 0, 0, 0)' || bodyBg === 'transparent' || bodyBg === 'rgb(255, 255, 255)') {
                        return { ok: false, message: "❌ Paso 1/2: Ve a la pestaña CSS y cambia 'background-color: white' del body. Prueba con: lightblue, pink, lavender, #ffd700... ¡El que más te guste!" };
                    }
                    
                    if (h1Color === 'rgb(0, 0, 0)') {
                        return { ok: false, message: "✅ Paso 1/2 OK (fondo cambiado) | ❌ Paso 2/2: Ahora cambia 'color: black' del h1. Prueba: purple, hotpink, #ff6b6b, deeppink..." };
                    }
                    
                    return { ok: true, message: "🎉 ¡COMPLETADO! Tu página tiene estilo. Fondo: " + bodyBg + " y título con color. ¡Los colores quedaron hermosos! 🌈" };
                }
            },
            {
                id: "basico-3",
                title: "Tarjetita personal 🃏",
                description: "¡Vamos a crear algo más complejo! Las tarjetas (cards) son súper útiles en diseño web. Aprenderás a hacer una card con bordes redondeados, y a crear listas. ¡Es como hacer tu propia tarjeta de presentación!",
                learned: [
                    "Cómo crear una card con bordes redondeados",
                    "Uso de clases con class=''",
                    "Cómo hacer listas con &lt;ul&gt; y &lt;li&gt;"
                ],
                initialCode: {
                    html: `<div class="card">
    <h2>Sobre mí</h2>
    <p>Cosas que me gustan:</p>
    <ul>
        <li>Programar</li>
        <li>Agregar más cosas aquí</li>
    </ul>
</div>`,
                    css: `.card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    max-width: 400px;
}

h2 {
    color: #8b5cf6;
}`,
                    js: `// Sin JavaScript aún`
                },
                validate: function(doc) {
                    const card = doc.querySelector('.card');
                    if (!card) {
                        return { ok: false, message: "❌ Paso 1/3: Tu <div> necesita class='card'. Asegúrate que diga: <div class=\"card\">" };
                    }
                    
                    const ul = doc.querySelector('ul');
                    if (!ul) {
                        return { ok: false, message: "✅ Paso 1/3 OK (card existe) | ❌ Paso 2/3: Agrega una lista con <ul></ul> dentro de la card" };
                    }
                    
                    const listItems = doc.querySelectorAll('li');
                    if (listItems.length < 1) {
                        return { ok: false, message: "✅ Pasos 1-2 OK | ❌ Paso 3/3: Dentro del <ul> agrega items con <li>. Ejemplo: <li>Programar</li>" };
                    }
                    if (listItems.length < 3) {
                        return { ok: false, message: "✅ Pasos 1-2 OK | ⚠️ Paso 3/3: Tienes " + listItems.length + " items. ¡Agrega " + (3 - listItems.length) + " más! Necesitas al menos 3 cosas que te gustan." };
                    }
                    
                    return { ok: true, message: "🎉 ¡COMPLETADO! Hermosa tarjeta con " + listItems.length + " items en tu lista. Ya sabes crear componentes con estilo. ¡Sigue así! 🃏" };
                }
            },
            {
                id: "basico-4",
                title: "Botón mágico ✨",
                description: "¡Ahora viene JavaScript! Es lo que hace que las páginas sean interactivas. Vamos a crear un botón que cuando le hagas click, ¡cambie un texto! Usaremos 'addEventListener' para escuchar el click y cambiar el 'textContent'.",
                learned: [
                    "Qué es JavaScript y por qué es mágico",
                    "Cómo seleccionar elementos con querySelector",
                    "Cómo responder a clicks con addEventListener"
                ],
                initialCode: {
                    html: `<h1>Botón Mágico</h1>
<p id="msg">Texto original</p>
<button id="btn">¡Cámbiame!</button>`,
                    css: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

button {
    background: #8b5cf6;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
}

button:hover {
    background: #7c3aed;
}`,
                    js: `const btn = document.querySelector('#btn');
const msg = document.querySelector('#msg');

btn.addEventListener('click', function() {
    // Cambia el texto del mensaje aquí
    msg.textContent = 'Escribe un nuevo texto aquí';
});`
                },
                validate: function(doc) {
                    const msg = doc.querySelector('#msg');
                    const btn = doc.querySelector('#btn');
                    
                    if (!msg) {
                        return { ok: false, message: "❌ Paso 1/3: En el HTML necesitas un <p id='msg'> para mostrar el mensaje" };
                    }
                    
                    if (!btn) {
                        return { ok: false, message: "✅ Paso 1/3 OK | ❌ Paso 2/3: Agrega un <button id='btn'> en el HTML" };
                    }
                    
                    const hasEventListener = btn.onclick !== null || btn.getAttribute('onclick') !== null;
                    
                    const originalText = msg.textContent;
                    btn.click();
                    const newText = msg.textContent;
                    
                    if (originalText === newText) {
                        return { ok: false, message: "✅ Pasos 1-2 OK | ❌ Paso 3/3: Ve a la pestaña JavaScript. El botón no cambia el texto. Revisa que: 1) btn.addEventListener('click', ...) esté bien escrito, 2) Dentro del click, cambies msg.textContent = 'nuevo texto'" };
                    }
                    
                    return { ok: true, message: "🎉 ¡COMPLETADO! Tu botón funciona. Click hace que '" + originalText + "' cambie a '" + newText + "'. ¡Magia JavaScript! ✨ ¡Ya haces páginas interactivas!" };
                }
            },
            {
                id: "basico-5",
                title: "Contador de mates 🧉",
                description: "¡Vamos a contar! Imagina que quieres llevar la cuenta de cuántos mates tomaste hoy. Crearemos un contador que sume +1 cada vez que presiones un botón. Aprenderás sobre variables y cómo actualizar la pantalla.",
                learned: [
                    "Cómo usar variables en JavaScript",
                    "Cómo hacer operaciones (sumar, restar)",
                    "Cómo actualizar el contenido dinámicamente"
                ],
                initialCode: {
                    html: `<h1>Contador de Mates</h1>
<p>Mates tomados hoy: <span id="count">0</span></p>
<button id="btn-add">🧉 +1 Mate</button>`,
                    css: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
    text-align: center;
}

#count {
    font-size: 2em;
    font-weight: bold;
    color: #10b981;
}

button {
    background: #10b981;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 18px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
}

button:hover {
    background: #059669;
}`,
                    js: `let contador = 0;

const countElement = document.querySelector('#count');
const btnAdd = document.querySelector('#btn-add');

btnAdd.addEventListener('click', function() {
    contador = contador + 1;
    countElement.textContent = contador;
});`
                },
                validate: function(doc) {
                    const countElement = doc.querySelector('#count');
                    const btnAdd = doc.querySelector('#btn-add');
                    
                    if (!countElement) {
                        return { ok: false, message: "❌ Paso 1/3: En el HTML necesitas un <span id='count'> para mostrar el número" };
                    }
                    
                    if (!btnAdd) {
                        return { ok: false, message: "✅ Paso 1/3 OK | ❌ Paso 2/3: Agrega un <button id='btn-add'> en el HTML" };
                    }
                    
                    const initialValue = parseInt(countElement.textContent) || 0;
                    btnAdd.click();
                    const afterOneClick = parseInt(countElement.textContent) || 0;
                    btnAdd.click();
                    const finalValue = parseInt(countElement.textContent) || 0;
                    
                    if (afterOneClick === initialValue) {
                        return { ok: false, message: "✅ Pasos 1-2 OK | ❌ Paso 3/3: JavaScript no está sumando. Ve a JS y: 1) Crea variable 'let contador = 0', 2) En el click haz 'contador++' o 'contador = contador + 1', 3) Actualiza el texto: countElement.textContent = contador" };
                    }
                    
                    if (finalValue !== initialValue + 2) {
                        return { ok: false, message: "✅ Pasos 1-2 OK | ⚠️ Paso 3/3: El contador suma pero no correctamente. Valor inicial: " + initialValue + ", después de 2 clicks: " + finalValue + " (debería ser " + (initialValue + 2) + "). Revisa que sumes +1 en cada click." };
                    }
                    
                    return { ok: true, message: "🎉 ¡COMPLETADO! Contador perfecto: " + initialValue + " → " + afterOneClick + " → " + finalValue + ". ¡Ya dominas variables y eventos! 🧉" };
                }
            },
            {
                id: "basico-6",
                title: "Mini proyecto: Mi mini perfil 🌟",
                description: "¡El reto final del nivel básico! Aquí vas a combinar todo lo que aprendiste: HTML para la estructura, CSS para el estilo, y JavaScript para la interacción. Crea una mini página de perfil con una card, un contador de visitas y un botón que cambie algo. ¡Sé creativa!",
                learned: [
                    "Combinar HTML, CSS y JavaScript",
                    "Crear componentes completos",
                    "Pensar como desarrolladora web"
                ],
                initialCode: {
                    html: `<div class="card">
    <h1>Mi Mini Perfil</h1>
    <p>¡Hola! Soy Naomi y estoy aprendiendo a programar 💜</p>
    
    <h3>Visitas a mi perfil: <span id="visitas">0</span></h3>
    <button id="btn-visita">👋 Nueva visita</button>
    
    <button id="btn-sorpresa">✨ Sorpresa</button>
    <p id="mensaje"></p>
</div>`,
                    css: `body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    font-family: Arial, sans-serif;
    padding: 40px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    background: white;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    max-width: 500px;
    text-align: center;
}

h1 {
    color: #8b5cf6;
    margin-bottom: 10px;
}

#visitas {
    font-size: 2em;
    font-weight: bold;
    color: #10b981;
}

button {
    background: #8b5cf6;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    margin: 10px 5px;
}

button:hover {
    background: #7c3aed;
    transform: translateY(-2px);
}

#mensaje {
    margin-top: 15px;
    font-size: 18px;
    font-weight: bold;
    color: #ec4899;
    min-height: 25px;
}`,
                    js: `let contadorVisitas = 0;

const visitasElement = document.querySelector('#visitas');
const btnVisita = document.querySelector('#btn-visita');
const btnSorpresa = document.querySelector('#btn-sorpresa');
const mensajeElement = document.querySelector('#mensaje');

btnVisita.addEventListener('click', function() {
    contadorVisitas++;
    visitasElement.textContent = contadorVisitas;
});

btnSorpresa.addEventListener('click', function() {
    mensajeElement.textContent = '¡Eres increíble, Naomi! 🌟';
});`
                },
                validate: function(doc) {
                    const card = doc.querySelector('.card');
                    if (!card) {
                        return { ok: false, message: "❌ Paso 1/4: Tu perfil necesita estar dentro de un <div class='card'>" };
                    }
                    
                    const btnVisita = doc.querySelector('#btn-visita');
                    const visitasElement = doc.querySelector('#visitas');
                    
                    if (!visitasElement) {
                        return { ok: false, message: "✅ Paso 1/4 OK | ❌ Paso 2/4: Agrega un <span id='visitas'> para el contador" };
                    }
                    
                    if (!btnVisita) {
                        return { ok: false, message: "✅ Pasos 1-2 OK | ❌ Paso 3/4: Agrega un <button id='btn-visita'> para contar visitas" };
                    }
                    
                    const initialCount = parseInt(visitasElement.textContent) || 0;
                    btnVisita.click();
                    const newCount = parseInt(visitasElement.textContent) || 0;
                    
                    if (newCount !== initialCount + 1) {
                        return { ok: false, message: "✅ Pasos 1-3 OK | ❌ Paso 4/4: El contador no suma. En JavaScript, al hacer click en btn-visita debes: contadorVisitas++; visitasElement.textContent = contadorVisitas;" };
                    }
                    
                    const btnSorpresa = doc.querySelector('#btn-sorpresa');
                    if (!btnSorpresa) {
                        return { ok: false, message: "✅ Contador funciona! | ⚠️ Extra: Agrega un <button id='btn-sorpresa'> para completar al 100%" };
                    }
                    
                    const mensaje = doc.querySelector('#mensaje');
                    if (!mensaje) {
                        return { ok: false, message: "✅ Casi listo! | ⚠️ Agrega un <p id='mensaje'></p> donde aparecerá la sorpresa" };
                    }
                    
                    return { ok: true, message: "🎊🎉 ¡NIVEL BÁSICO COMPLETADO! Ya dominas HTML (estructura), CSS (estilos) y JavaScript (interacción). ¡Eres oficialmente programadora! Desbloquea el nivel intermedio completando más retos. 💜✨" };
                }
            }
        ]
    },
    {
        id: "intermedio",
        title: "🚀 Nivel Intermedio",
        unlockCondition: function(progressData) {
            const basicCompleted = progressData.basico ? Object.values(progressData.basico).filter(v => v).length : 0;
            const basicTotal = modules[0].challenges.length;
            const percent = (basicCompleted / basicTotal) * 100;
            return percent >= 70;
        },
        challenges: [
            {
                id: "intermedio-1",
                title: "Lista dinámica 📝",
                description: "¡Ahora vamos a crear elementos desde JavaScript! Aprenderás a manipular el DOM agregando elementos dinámicamente. Cada vez que presiones el botón, se agregará un nuevo item a la lista.",
                learned: [
                    "Crear elementos con createElement",
                    "Agregar elementos al DOM con appendChild",
                    "Manipulación dinámica de listas"
                ],
                initialCode: {
                    html: `<h1>Mi Lista de Tareas</h1>
<input type="text" id="nueva-tarea" placeholder="Nueva tarea...">
<button id="btn-agregar">➕ Agregar</button>
<ul id="lista"></ul>`,
                    css: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
    max-width: 500px;
    margin: 0 auto;
}

input {
    padding: 10px;
    font-size: 16px;
    border: 2px solid #8b5cf6;
    border-radius: 8px;
    width: 300px;
}

button {
    background: #8b5cf6;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    margin-left: 10px;
}

ul {
    margin-top: 20px;
    list-style: none;
    padding: 0;
}

li {
    background: #f3f4f6;
    padding: 12px;
    margin-bottom: 8px;
    border-radius: 6px;
    border-left: 4px solid #8b5cf6;
}`,
                    js: `const btnAgregar = document.querySelector('#btn-agregar');
const inputTarea = document.querySelector('#nueva-tarea');
const lista = document.querySelector('#lista');

btnAgregar.addEventListener('click', function() {
    const texto = inputTarea.value;
    
    if (texto) {
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = texto;
        lista.appendChild(nuevoItem);
        inputTarea.value = '';
    }
});`
                },
                validate: function(doc) {
                    const ul = doc.querySelector('ul');
                    if (!ul) {
                        return { ok: false, message: "📝 Necesitas un &lt;ul&gt; para la lista" };
                    }
                    
                    const btn = doc.querySelector('#btn-agregar');
                    const input = doc.querySelector('#nueva-tarea');
                    
                    if (!btn || !input) {
                        return { ok: false, message: "🔍 Necesitas un input y un botón para agregar items" };
                    }
                    
                    const initialCount = ul.querySelectorAll('li').length;
                    input.value = 'Test 1';
                    btn.click();
                    input.value = 'Test 2';
                    btn.click();
                    
                    const finalCount = ul.querySelectorAll('li').length;
                    
                    if (finalCount !== initialCount + 2) {
                        return { ok: false, message: "🤔 El botón no está agregando items a la lista. Revisa que uses createElement y appendChild" };
                    }
                    
                    return { ok: true, message: "🎉 ¡Perfecto! Ya sabes crear elementos dinámicamente. ¡El DOM es tu amigo!" };
                }
            },
            {
                id: "intermedio-2",
                title: "Validador de formulario ✅",
                description: "Los formularios son súper importantes en la web. Aprenderás a validar que los campos no estén vacíos y a mostrar mensajes de error o éxito. ¡Esto es lo que hacen todos los sitios cuando te registras!",
                learned: [
                    "Validar inputs antes de enviar",
                    "Mostrar mensajes de error/éxito",
                    "Prevenir envío de formulario con preventDefault"
                ],
                initialCode: {
                    html: `<h1>Formulario de Contacto</h1>
<form id="formulario">
    <input type="text" id="nombre" placeholder="Tu nombre">
    <input type="email" id="email" placeholder="Tu email">
    <button type="submit">Enviar</button>
</form>
<p id="mensaje"></p>`,
                    css: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
}

input {
    display: block;
    width: 100%;
    padding: 12px;
    margin-bottom: 10px;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 16px;
}

input.error {
    border-color: #ef4444;
}

button {
    width: 100%;
    background: #8b5cf6;
    color: white;
    border: none;
    padding: 12px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
}

#mensaje {
    margin-top: 15px;
    padding: 12px;
    border-radius: 8px;
    font-weight: bold;
}

.mensaje-error {
    background: #fef2f2;
    color: #ef4444;
}

.mensaje-exito {
    background: #f0fdf4;
    color: #10b981;
}`,
                    js: `const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Limpiar mensaje anterior
    mensaje.textContent = '';
    mensaje.className = '';
    
    // Validar
    if (!nombre.value || !email.value) {
        mensaje.textContent = '❌ Por favor completa todos los campos';
        mensaje.className = 'mensaje-error';
    } else {
        mensaje.textContent = '✅ ¡Formulario enviado correctamente!';
        mensaje.className = 'mensaje-exito';
        nombre.value = '';
        email.value = '';
    }
});`
                },
                validate: function(doc) {
                    const form = doc.querySelector('#formulario');
                    const mensaje = doc.querySelector('#mensaje');
                    const nombre = doc.querySelector('#nombre');
                    const email = doc.querySelector('#email');
                    
                    if (!form || !mensaje || !nombre || !email) {
                        return { ok: false, message: "🔍 Necesitas el formulario, inputs y elemento de mensaje" };
                    }
                    
                    // Probar con campos vacíos
                    nombre.value = '';
                    email.value = '';
                    form.dispatchEvent(new Event('submit'));
                    
                    if (!mensaje.textContent || !mensaje.className.includes('error')) {
                        return { ok: false, message: "🤔 Cuando los campos están vacíos, debe mostrar un mensaje de error" };
                    }
                    
                    // Probar con campos llenos
                    nombre.value = 'Test';
                    email.value = 'test@test.com';
                    form.dispatchEvent(new Event('submit'));
                    
                    if (!mensaje.className.includes('exito')) {
                        return { ok: false, message: "✨ Cuando los campos están completos, debe mostrar mensaje de éxito" };
                    }
                    
                    return { ok: true, message: "🎊 ¡Excelente! Ya sabes validar formularios como un pro." };
                }
            },
            {
                id: "intermedio-3",
                title: "Modo noche 🌙",
                description: "¡El modo oscuro está de moda! Aprenderás a cambiar entre temas claro y oscuro usando clases de CSS. Esto es muy útil porque muchos usuarios prefieren el modo oscuro para cuidar sus ojos.",
                learned: [
                    "Alternar clases con classList.toggle",
                    "Crear temas claro/oscuro",
                    "Guardar preferencias del usuario"
                ],
                initialCode: {
                    html: `<div class="container">
    <h1>Mi Sitio Web</h1>
    <p>Este sitio tiene modo oscuro. ¡Pruébalo!</p>
    <button id="btn-theme">🌙 Cambiar tema</button>
</div>`,
                    css: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background: white;
    color: #1f2937;
    transition: all 0.3s;
}

body.dark-mode {
    background: #1f2937;
    color: white;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 30px;
    background: #f3f4f6;
    border-radius: 12px;
    transition: all 0.3s;
}

body.dark-mode .container {
    background: #374151;
}

button {
    background: #8b5cf6;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
}

body.dark-mode button {
    background: #a78bfa;
}`,
                    js: `const btnTheme = document.querySelector('#btn-theme');

btnTheme.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        btnTheme.textContent = '☀️ Cambiar tema';
    } else {
        btnTheme.textContent = '🌙 Cambiar tema';
    }
});`
                },
                validate: function(doc) {
                    const btn = doc.querySelector('#btn-theme');
                    if (!btn) {
                        return { ok: false, message: "🔍 Necesitas un botón con id='btn-theme'" };
                    }
                    
                    const body = doc.body;
                    const initialHasDark = body.classList.contains('dark-mode');
                    
                    btn.click();
                    
                    const afterClickHasDark = body.classList.contains('dark-mode');
                    
                    if (initialHasDark === afterClickHasDark) {
                        return { ok: false, message: "🤔 El botón debe alternar la clase 'dark-mode' en el body usando classList.toggle" };
                    }
                    
                    return { ok: true, message: "🌙 ¡Genial! El modo oscuro funciona perfectamente. ¡Tus ojos lo agradecen!" };
                }
            },
            {
                id: "intermedio-4",
                title: "Persistencia local 💾",
                description: "¿Qué pasa si cierras la página y quieres que tus datos se guarden? ¡localStorage al rescate! Aprenderás a guardar datos en el navegador para que persistan entre sesiones. Es como la memoria del navegador.",
                learned: [
                    "Guardar datos con localStorage.setItem",
                    "Leer datos con localStorage.getItem",
                    "Convertir objetos con JSON.stringify/parse"
                ],
                initialCode: {
                    html: `<h1>Contador Persistente</h1>
<p>Cuenta: <span id="count">0</span></p>
<button id="btn-add">➕ Sumar</button>
<button id="btn-reset">🔄 Reset</button>
<p class="info">💡 El contador se guarda automáticamente</p>`,
                    css: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
    text-align: center;
}

#count {
    font-size: 3em;
    font-weight: bold;
    color: #8b5cf6;
    display: block;
    margin: 20px 0;
}

button {
    background: #8b5cf6;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    margin: 5px;
}

#btn-reset {
    background: #ef4444;
}

.info {
    color: #6b7280;
    font-size: 14px;
    margin-top: 20px;
}`,
                    js: `const countElement = document.querySelector('#count');
const btnAdd = document.querySelector('#btn-add');
const btnReset = document.querySelector('#btn-reset');

// Cargar contador guardado
let contador = parseInt(localStorage.getItem('miContador')) || 0;
countElement.textContent = contador;

btnAdd.addEventListener('click', function() {
    contador++;
    countElement.textContent = contador;
    localStorage.setItem('miContador', contador);
});

btnReset.addEventListener('click', function() {
    contador = 0;
    countElement.textContent = contador;
    localStorage.setItem('miContador', contador);
});`
                },
                validate: function(doc) {
                    const btnAdd = doc.querySelector('#btn-add');
                    const countElement = doc.querySelector('#count');
                    
                    if (!btnAdd || !countElement) {
                        return { ok: false, message: "🔍 Necesitas el botón y el elemento contador" };
                    }
                    
                    // Limpiar localStorage antes de probar
                    doc.defaultView.localStorage.removeItem('miContador');
                    
                    btnAdd.click();
                    btnAdd.click();
                    
                    const savedValue = doc.defaultView.localStorage.getItem('miContador');
                    
                    if (!savedValue) {
                        return { ok: false, message: "💾 No encuentro datos guardados en localStorage con la clave esperada. Usa localStorage.setItem" };
                    }
                    
                    if (parseInt(savedValue) !== 2) {
                        return { ok: false, message: "🤔 El valor guardado no coincide con los clicks. Asegúrate de guardar después de cada suma" };
                    }
                    
                    return { ok: true, message: "💾 ¡Perfecto! Tus datos ahora persisten. ¡localStorage es poderoso!" };
                }
            },
            {
                id: "intermedio-5",
                title: "Buscador en lista 🔍",
                description: "¡Hora de filtrar! Aprenderás a crear un buscador que filtre elementos en tiempo real mientras escribes. Esto es lo que usan sitios como YouTube o Spotify para buscar contenido.",
                learned: [
                    "Filtrar elementos del DOM",
                    "Escuchar eventos de input",
                    "Mostrar/ocultar elementos dinámicamente"
                ],
                initialCode: {
                    html: `<h1>Buscador de Frutas</h1>
<input type="text" id="buscador" placeholder="Buscar fruta...">
<ul id="lista">
    <li>🍎 Manzana</li>
    <li>🍌 Banana</li>
    <li>🍊 Naranja</li>
    <li>🍇 Uvas</li>
    <li>🍓 Fresa</li>
    <li>🥝 Kiwi</li>
</ul>`,
                    css: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
    max-width: 500px;
    margin: 0 auto;
}

input {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 2px solid #8b5cf6;
    border-radius: 8px;
    margin-bottom: 20px;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    background: #f3f4f6;
    padding: 12px;
    margin-bottom: 8px;
    border-radius: 6px;
    font-size: 18px;
}

li.hidden {
    display: none;
}`,
                    js: `const buscador = document.querySelector('#buscador');
const items = document.querySelectorAll('#lista li');

buscador.addEventListener('input', function() {
    const texto = buscador.value.toLowerCase();
    
    items.forEach(function(item) {
        const contenido = item.textContent.toLowerCase();
        
        if (contenido.includes(texto)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});`
                },
                validate: function(doc) {
                    const input = doc.querySelector('#buscador');
                    const items = doc.querySelectorAll('#lista li');
                    
                    if (!input || items.length < 3) {
                        return { ok: false, message: "🔍 Necesitas el input y al menos 3 items en la lista" };
                    }
                    
                    // Probar búsqueda
                    input.value = 'ban';
                    input.dispatchEvent(new Event('input'));
                    
                    let hiddenCount = 0;
                    let visibleCount = 0;
                    
                    items.forEach(item => {
                        if (item.classList.contains('hidden') || item.style.display === 'none') {
                            hiddenCount++;
                        } else {
                            visibleCount++;
                        }
                    });
                    
                    if (hiddenCount === 0) {
                        return { ok: false, message: "🤔 El filtro no está ocultando elementos. Usa classList para agregar/remover la clase 'hidden'" };
                    }
                    
                    if (visibleCount === 0) {
                        return { ok: false, message: "🤔 El filtro está ocultando todo. Revisa la lógica del includes()" };
                    }
                    
                    return { ok: true, message: "🔍 ¡Increíble! Tu buscador funciona en tiempo real. ¡Muy útil!" };
                }
            },
            {
                id: "intermedio-6",
                title: "Fetch simulado ⏳",
                description: "¡Bienvenida al mundo asíncrono! Aprenderás sobre Promises y setTimeout para simular una carga de datos. Esto es la base para entender cómo funcionan las llamadas a APIs. Muestra un 'loading...' mientras esperas.",
                learned: [
                    "Qué es código asíncrono",
                    "Usar setTimeout para simular delays",
                    "Trabajar con Promises básicas"
                ],
                initialCode: {
                    html: `<h1>Cargador de Datos</h1>
<button id="btn-cargar">📥 Cargar Datos</button>
<div id="resultado"></div>`,
                    css: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
}

button {
    background: #8b5cf6;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 20px;
}

#resultado {
    min-height: 100px;
    padding: 20px;
    background: #f3f4f6;
    border-radius: 8px;
    font-size: 18px;
}

.loading {
    color: #6b7280;
    font-style: italic;
}

.datos {
    color: #10b981;
    font-weight: bold;
}`,
                    js: `const btnCargar = document.querySelector('#btn-cargar');
const resultado = document.querySelector('#resultado');

function cargarDatos() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve('¡Datos cargados correctamente! 🎉');
        }, 2000);
    });
}

btnCargar.addEventListener('click', function() {
    resultado.textContent = 'Cargando...';
    resultado.className = 'loading';
    
    cargarDatos().then(function(datos) {
        resultado.textContent = datos;
        resultado.className = 'datos';
    });
});`
                },
                validate: function(doc) {
                    const btn = doc.querySelector('#btn-cargar');
                    const resultado = doc.querySelector('#resultado');
                    
                    if (!btn || !resultado) {
                        return { ok: false, message: "🔍 Necesitas el botón y el div de resultado" };
                    }
                    
                    // Verificar que muestra loading
                    btn.click();
                    
                    const loadingText = resultado.textContent.toLowerCase();
                    if (!loadingText.includes('cargando') && !loadingText.includes('loading')) {
                        return { ok: false, message: "⏳ Debe mostrar 'Cargando...' o 'Loading...' mientras espera" };
                    }
                    
                    // Verificar que después muestra datos
                    return new Promise(resolve => {
                        setTimeout(() => {
                            const finalText = resultado.textContent;
                            if (finalText === loadingText || !finalText) {
                                resolve({ ok: false, message: "🤔 Después del loading debe mostrar los datos. Revisa que la Promise se resuelva y actualice el resultado" });
                            } else {
                                resolve({ ok: true, message: "⏳ ¡Excelente! Ya entiendes el código asíncrono. ¡Estás list@ para APIs reales!" });
                            }
                        }, 2500);
                    });
                }
            }
        ]
    },
    {
        id: "avanzado",
        title: "⚡ Nivel Avanzado",
        unlockCondition: function(progressData) {
            const intermedioCompleted = progressData.intermedio ? Object.values(progressData.intermedio).filter(v => v).length : 0;
            const intermedioTotal = modules[1].challenges.length;
            const percent = (intermedioCompleted / intermedioTotal) * 100;
            return percent >= 60;
        },
        challenges: [
            {
                id: "avanzado-1",
                title: "Async real 🌐",
                description: "¡Ahora sí, APIs reales! Usaremos async/await para hacer una petición real a JSONPlaceholder (un API de prueba). Esto es exactamente lo que hacen las apps modernas para obtener datos de servidores.",
                learned: [
                    "Usar fetch para hacer peticiones HTTP",
                    "Trabajar con async/await",
                    "Procesar respuestas JSON"
                ],
                initialCode: {
                    html: `<h1>Posts desde API</h1>
<button id="btn-fetch">📡 Cargar Posts</button>
<div id="lista-posts"></div>`,
                    css: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
    max-width: 700px;
    margin: 0 auto;
}

button {
    background: #8b5cf6;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 20px;
}

.post {
    background: #f3f4f6;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    border-left: 4px solid #8b5cf6;
}

.post h3 {
    margin: 0 0 10px 0;
    color: #8b5cf6;
}

.post p {
    margin: 0;
    color: #6b7280;
}`,
                    js: `const btnFetch = document.querySelector('#btn-fetch');
const listaPosts = document.querySelector('#lista-posts');

async function cargarPosts() {
    try {
        listaPosts.innerHTML = 'Cargando...';
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const posts = await response.json();
        
        listaPosts.innerHTML = '';
        
        posts.forEach(function(post) {
            const div = document.createElement('div');
            div.className = 'post';
            div.innerHTML = '<h3>' + post.title + '</h3><p>' + post.body + '</p>';
            listaPosts.appendChild(div);
        });
    } catch (error) {
        listaPosts.innerHTML = 'Error al cargar: ' + error.message;
    }
}

btnFetch.addEventListener('click', cargarPosts);`
                },
                validate: function(doc) {
                    const btn = doc.querySelector('#btn-fetch');
                    const lista = doc.querySelector('#lista-posts');
                    
                    if (!btn || !lista) {
                        return { ok: false, message: "🔍 Necesitas el botón y el contenedor de posts" };
                    }
                    
                    btn.click();
                    
                    return new Promise(resolve => {
                        setTimeout(() => {
                            const posts = lista.querySelectorAll('.post');
                            if (posts.length < 3) {
                                resolve({ ok: false, message: "🌐 Debe renderizar al menos 3 posts desde la API. Verifica que fetch funcione y agregues los elementos al DOM" });
                            } else {
                                resolve({ ok: true, message: "🌐 ¡Increíble! Ya trabajas con APIs reales. ¡Eres imparable!" });
                            }
                        }, 3000);
                    });
                }
            },
            {
                id: "avanzado-2",
                title: "Retry automático 🔄",
                description: "Las cosas pueden fallar en internet. Aprenderás a crear un sistema que reintente automáticamente si una petición falla. Esto hace que tus apps sean más robustas y confiables.",
                learned: [
                    "Manejo de errores con try/catch",
                    "Implementar lógica de reintentos",
                    "Hacer código más resiliente"
                ],
                initialCode: {
                    html: `<h1>Fetch con Retry</h1>
<button id="btn-fetch">🔄 Intentar Cargar</button>
<div id="info">
    <p>Intentos: <span id="attempts">0</span></p>
    <p id="status">Esperando...</p>
</div>`,
                    css: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
}

button {
    background: #8b5cf6;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 20px;
}

#info {
    background: #f3f4f6;
    padding: 20px;
    border-radius: 8px;
}

#attempts {
    font-size: 2em;
    font-weight: bold;
    color: #8b5cf6;
}

#status {
    color: #6b7280;
    font-style: italic;
}`,
                    js: `const btnFetch = document.querySelector('#btn-fetch');
const attemptsElement = document.querySelector('#attempts');
const statusElement = document.querySelector('#status');

let attempts = 0;

async function fetchWithRetry(url, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        attempts++;
        attemptsElement.textContent = attempts;
        statusElement.textContent = 'Intento ' + (i + 1) + ' de ' + maxRetries;
        
        try {
            const response = await fetch(url);
            if (response.ok) {
                statusElement.textContent = '✅ ¡Éxito en intento ' + (i + 1) + '!';
                return await response.json();
            }
        } catch (error) {
            if (i === maxRetries - 1) {
                statusElement.textContent = '❌ Falló después de ' + maxRetries + ' intentos';
                throw error;
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

btnFetch.addEventListener('click', async function() {
    attempts = 0;
    attemptsElement.textContent = 0;
    try {
        await fetchWithRetry('https://jsonplaceholder.typicode.com/posts/1');
    } catch (error) {
        console.error(error);
    }
});`
                },
                validate: function(doc) {
                    const btn = doc.querySelector('#btn-fetch');
                    const attemptsElement = doc.querySelector('#attempts');
                    
                    if (!btn || !attemptsElement) {
                        return { ok: false, message: "🔍 Necesitas el botón y el contador de intentos" };
                    }
                    
                    const initialAttempts = parseInt(attemptsElement.textContent) || 0;
                    btn.click();
                    
                    return new Promise(resolve => {
                        setTimeout(() => {
                            const finalAttempts = parseInt(attemptsElement.textContent) || 0;
                            if (finalAttempts <= initialAttempts) {
                                resolve({ ok: false, message: "🔄 La variable 'attempts' debe incrementarse. Asegúrate de contar cada intento" });
                            } else {
                                resolve({ ok: true, message: "🔄 ¡Genial! Tu código es más robusto con reintentos automáticos." });
                            }
                        }, 2000);
                    });
                }
            },
            {
                id: "avanzado-3",
                title: "Debounce ⏱️",
                description: "Imagina buscar en Google: no quieres hacer una petición con cada tecla que presionas. El debounce espera a que dejes de escribir antes de ejecutar la función. ¡Optimización nivel pro!",
                learned: [
                    "Qué es debouncing y por qué es importante",
                    "Optimizar rendimiento",
                    "Usar setTimeout de forma avanzada"
                ],
                initialCode: {
                    html: `<h1>Búsqueda con Debounce</h1>
<input type="text" id="search" placeholder="Escribe algo...">
<p>Ejecuciones: <span id="count">0</span></p>
<p id="resultado"></p>`,
                    css: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
    max-width: 500px;
    margin: 0 auto;
}

input {
    width: 100%;
    padding: 12px;
    font-size: 18px;
    border: 2px solid #8b5cf6;
    border-radius: 8px;
    margin-bottom: 20px;
}

#count {
    font-size: 2em;
    font-weight: bold;
    color: #8b5cf6;
}

#resultado {
    background: #f3f4f6;
    padding: 15px;
    border-radius: 8px;
    min-height: 50px;
    color: #6b7280;
}`,
                    js: `const searchInput = document.querySelector('#search');
const countElement = document.querySelector('#count');
const resultadoElement = document.querySelector('#resultado');

let count = 0;
let timeoutId;

function buscar(texto) {
    count++;
    countElement.textContent = count;
    resultadoElement.textContent = 'Buscando: ' + texto;
}

function debounce(func, delay) {
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
            func.apply(this, args);
        }, delay);
    };
}

const buscarDebounced = debounce(buscar, 500);

searchInput.addEventListener('input', function(e) {
    buscarDebounced(e.target.value);
});`
                },
                validate: function(doc) {
                    const input = doc.querySelector('#search');
                    const countElement = doc.querySelector('#count');
                    
                    if (!input || !countElement) {
                        return { ok: false, message: "🔍 Necesitas el input y el contador" };
                    }
                    
                    const initialCount = parseInt(countElement.textContent) || 0;
                    
                    // Simular escritura rápida
                    input.value = 't';
                    input.dispatchEvent(new Event('input'));
                    input.value = 'te';
                    input.dispatchEvent(new Event('input'));
                    input.value = 'tes';
                    input.dispatchEvent(new Event('input'));
                    input.value = 'test';
                    input.dispatchEvent(new Event('input'));
                    
                    const immediateCount = parseInt(countElement.textContent) || 0;
                    
                    if (immediateCount - initialCount >= 4) {
                        return { ok: false, message: "⏱️ El debounce no está funcionando. La función se está ejecutando en cada tecla. Usa setTimeout y clearTimeout" };
                    }
                    
                    return new Promise(resolve => {
                        setTimeout(() => {
                            const finalCount = parseInt(countElement.textContent) || 0;
                            if (finalCount === initialCount) {
                                resolve({ ok: false, message: "🤔 La función nunca se ejecuta. Revisa que setTimeout esté funcionando" });
                            } else {
                                resolve({ ok: true, message: "⏱️ ¡Perfecto! El debounce optimiza tu código como un profesional." });
                            }
                        }, 1000);
                    });
                }
            },
            {
                id: "avanzado-4",
                title: "Mini arquitectura 🏗️",
                description: "El código organizado es código feliz. Aprenderás a separar tu código en funciones con responsabilidades claras: init(), render(), handleEvents(). Esto es fundamental para proyectos grandes.",
                learned: [
                    "Organizar código en módulos",
                    "Separación de responsabilidades",
                    "Arquitectura de aplicaciones"
                ],
                initialCode: {
                    html: `<div id="app">
    <h1>Mini App Organizada</h1>
    <button id="btn">Click</button>
    <p id="output"></p>
</div>`,
                    css: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

#app {
    max-width: 500px;
    margin: 0 auto;
    padding: 30px;
    background: #f3f4f6;
    border-radius: 12px;
}

button {
    background: #8b5cf6;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
}

#output {
    margin-top: 20px;
    padding: 15px;
    background: white;
    border-radius: 8px;
    min-height: 50px;
}`,
                    js: `// Estado de la aplicación
const state = {
    clicks: 0
};

// Renderizar la UI
function render() {
    const output = document.querySelector('#output');
    output.textContent = 'Clicks: ' + state.clicks;
}

// Manejar eventos
function handleEvents() {
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', function() {
        state.clicks++;
        render();
    });
}

// Inicializar la aplicación
function init() {
    render();
    handleEvents();
}

// Ejecutar cuando cargue la página
init();`
                },
                validate: function(doc) {
                    const scriptContent = doc.querySelector('script') ? doc.querySelector('script').textContent : '';
                    
                    // Verificar que existan las funciones
                    const hasRender = scriptContent.includes('function render(') || scriptContent.includes('const render') || scriptContent.includes('let render');
                    const hasInit = scriptContent.includes('function init(') || scriptContent.includes('const init') || scriptContent.includes('let init');
                    const hasHandleEvents = scriptContent.includes('function handleEvents(') || scriptContent.includes('const handleEvents') || scriptContent.includes('let handleEvents');
                    
                    if (!hasRender) {
                        return { ok: false, message: "🏗️ Necesitas una función render() para actualizar la UI" };
                    }
                    
                    if (!hasHandleEvents) {
                        return { ok: false, message: "🏗️ Necesitas una función handleEvents() para manejar eventos" };
                    }
                    
                    if (!hasInit) {
                        return { ok: false, message: "🏗️ Necesitas una función init() para inicializar la app" };
                    }
                    
                    // Verificar que funcione
                    const btn = doc.querySelector('#btn');
                    const output = doc.querySelector('#output');
                    
                    if (!btn || !output) {
                        return { ok: false, message: "🔍 Necesitas el botón y el elemento output" };
                    }
                    
                    const before = output.textContent;
                    btn.click();
                    const after = output.textContent;
                    
                    if (before === after) {
                        return { ok: false, message: "🤔 El botón no actualiza la UI. Asegúrate de llamar render() después de cambiar el estado" };
                    }
                    
                    return { ok: true, message: "🏗️ ¡Excelente arquitectura! Tu código está limpio y organizado como un pro." };
                }
            },
            {
                id: "avanzado-5",
                title: "Proyecto Final Avanzado 🚀",
                description: "¡El desafío definitivo! Combina TODO lo que aprendiste: fetch de API real, localStorage para guardar datos, filtro de búsqueda y modo oscuro. ¡Crea una mini app completa!",
                learned: [
                    "Integrar múltiples conceptos",
                    "Crear aplicaciones completas",
                    "Pensar como ingeniera de software"
                ],
                initialCode: {
                    html: `<div id="app">
    <header>
        <h1>📚 Mi Biblioteca de Posts</h1>
        <button id="btn-theme">🌙 Modo</button>
    </header>
    
    <div class="controls">
        <button id="btn-load">📡 Cargar Posts</button>
        <input type="text" id="search" placeholder="Buscar...">
    </div>
    
    <div id="posts"></div>
</div>`,
                    css: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background: white;
    color: #1f2937;
    transition: all 0.3s;
}

body.dark-mode {
    background: #1f2937;
    color: white;
}

#app {
    max-width: 800px;
    margin: 0 auto;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.controls {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

input {
    flex: 1;
    padding: 12px;
    border: 2px solid #8b5cf6;
    border-radius: 8px;
    font-size: 16px;
}

body.dark-mode input {
    background: #374151;
    color: white;
    border-color: #a78bfa;
}

button {
    background: #8b5cf6;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
}

.post {
    background: #f3f4f6;
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 8px;
    border-left: 4px solid #8b5cf6;
}

body.dark-mode .post {
    background: #374151;
}

.post.hidden {
    display: none;
}`,
                    js: `// Estado
const state = {
    posts: [],
    darkMode: localStorage.getItem('darkMode') === 'true'
};

// Elementos
const btnLoad = document.querySelector('#btn-load');
const btnTheme = document.querySelector('#btn-theme');
const searchInput = document.querySelector('#search');
const postsContainer = document.querySelector('#posts');

// Cargar posts
async function loadPosts() {
    postsContainer.innerHTML = 'Cargando...';
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        state.posts = await response.json();
        localStorage.setItem('posts', JSON.stringify(state.posts));
        renderPosts();
    } catch (error) {
        postsContainer.innerHTML = 'Error: ' + error.message;
    }
}

// Renderizar posts
function renderPosts(filter = '') {
    postsContainer.innerHTML = '';
    state.posts.forEach(function(post) {
        const matches = post.title.toLowerCase().includes(filter.toLowerCase());
        const div = document.createElement('div');
        div.className = 'post' + (matches ? '' : ' hidden');
        div.innerHTML = '<h3>' + post.title + '</h3><p>' + post.body + '</p>';
        postsContainer.appendChild(div);
    });
}

// Tema
function toggleTheme() {
    state.darkMode = !state.darkMode;
    document.body.classList.toggle('dark-mode', state.darkMode);
    localStorage.setItem('darkMode', state.darkMode);
    btnTheme.textContent = state.darkMode ? '☀️ Modo' : '🌙 Modo';
}

// Eventos
btnLoad.addEventListener('click', loadPosts);
btnTheme.addEventListener('click', toggleTheme);
searchInput.addEventListener('input', e => renderPosts(e.target.value));

// Inicializar
document.body.classList.toggle('dark-mode', state.darkMode);
btnTheme.textContent = state.darkMode ? '☀️ Modo' : '🌙 Modo';

// Cargar posts guardados
const savedPosts = localStorage.getItem('posts');
if (savedPosts) {
    state.posts = JSON.parse(savedPosts);
    renderPosts();
}`
                },
                validate: function(doc) {
                    const btnLoad = doc.querySelector('#btn-load');
                    const btnTheme = doc.querySelector('#btn-theme');
                    const searchInput = doc.querySelector('#search');
                    const postsContainer = doc.querySelector('#posts');
                    
                    if (!btnLoad || !btnTheme || !searchInput || !postsContainer) {
                        return { ok: false, message: "🔍 Faltan elementos necesarios en el HTML" };
                    }
                    
                    // Verificar tema
                    btnTheme.click();
                    if (!doc.body.classList.contains('dark-mode')) {
                        return { ok: false, message: "🌙 El modo oscuro no funciona correctamente" };
                    }
                    btnTheme.click(); // Volver
                    
                    // Verificar localStorage
                    if (!doc.defaultView.localStorage.getItem('darkMode')) {
                        return { ok: false, message: "💾 El tema debe guardarse en localStorage" };
                    }
                    
                    // Verificar fetch
                    btnLoad.click();
                    
                    return new Promise(resolve => {
                        setTimeout(() => {
                            const posts = postsContainer.querySelectorAll('.post');
                            if (posts.length < 3) {
                                resolve({ ok: false, message: "📡 Debe cargar posts desde la API" });
                            }
                            
                            // Verificar filtro
                            searchInput.value = 'test';
                            searchInput.dispatchEvent(new Event('input'));
                            
                            let hasHidden = false;
                            posts.forEach(p => {
                                if (p.classList.contains('hidden')) hasHidden = true;
                            });
                            
                            if (!hasHidden) {
                                resolve({ ok: false, message: "🔍 El filtro debe ocultar posts que no coincidan" });
                            }
                            
                            resolve({ ok: true, message: "🎊🎉🚀 ¡INCREÍBLE! ¡Completaste TODOS los retos de OmiLabs! Eres oficialmente una desarrolladora web completa. Has aprendido HTML, CSS, JavaScript, APIs, localStorage, async/await y mucho más. ¡El límite es tu imaginación! 💜✨🌟" });
                        }, 3000);
                    });
                }
            }
        ]
    }
];

// Convertir módulos a array plano para navegación
const allChallenges = [];
modules.forEach(module => {
    module.challenges.forEach(challenge => {
        allChallenges.push({ ...challenge, moduleId: module.id, moduleTitle: module.title });
    });
});

// ========== ESTADO DE LA APLICACIÓN ==========
let currentChallengeIndex = 0;
let currentLang = 'html';
let userCode = {
    html: '',
    css: '',
    js: ''
};

// ========== ELEMENTOS DEL DOM ==========
const elements = {
    challengesList: document.getElementById('challenges-list'),
    challengeTitle: document.getElementById('challenge-title'),
    challengeDescription: document.getElementById('challenge-description'),
    checklistItems: document.getElementById('checklist-items'),
    codeEditor: document.getElementById('code-editor'),
    previewFrame: document.getElementById('preview-frame'),
    consoleBody: document.getElementById('console-body'),
    progressText: document.getElementById('progress-text'),
    progressPercent: document.getElementById('progress-percent'),
    progressFill: document.getElementById('progress-fill'),
    btnPrev: document.getElementById('btn-prev'),
    btnNext: document.getElementById('btn-next'),
    btnRun: document.getElementById('btn-run'),
    btnReset: document.getElementById('btn-reset'),
    btnResetProgress: document.getElementById('btn-reset-progress'),
    btnClearConsole: document.getElementById('btn-clear-console')
};

// ========== GESTIÓN DE PROGRESO ==========
function getCompletedChallenges() {
    const saved = localStorage.getItem('omilabs-completed');
    if (!saved) return {};
    
    try {
        const data = JSON.parse(saved);
        
        // Migrar formato antiguo si es necesario
        if (Array.isArray(data)) {
            const migrated = { basico: {} };
            data.forEach(id => {
                migrated.basico[`basico-${id}`] = true;
            });
            localStorage.setItem('omilabs-completed', JSON.stringify(migrated));
            return migrated;
        }
        
        return data;
    } catch {
        return {};
    }
}

function markChallengeCompleted(challengeId) {
    const completed = getCompletedChallenges();
    const challenge = allChallenges.find(c => c.id === challengeId);
    
    if (challenge) {
        if (!completed[challenge.moduleId]) {
            completed[challenge.moduleId] = {};
        }
        
        if (!completed[challenge.moduleId][challengeId]) {
            completed[challenge.moduleId][challengeId] = true;
            localStorage.setItem('omilabs-completed', JSON.stringify(completed));
            updateProgress();
            renderChallengesList();
        }
    }
}

function getTotalProgress() {
    const completed = getCompletedChallenges();
    let totalCompleted = 0;
    let totalChallenges = allChallenges.length;
    
    modules.forEach(module => {
        if (completed[module.id]) {
            totalCompleted += Object.values(completed[module.id]).filter(v => v).length;
        }
    });
    
    return { completed: totalCompleted, total: totalChallenges };
}

function getModuleProgress(moduleId) {
    const completed = getCompletedChallenges();
    const module = modules.find(m => m.id === moduleId);
    
    if (!module) return { completed: 0, total: 0 };
    
    const moduleCompleted = completed[moduleId] ? Object.values(completed[moduleId]).filter(v => v).length : 0;
    const moduleTotal = module.challenges.length;
    
    return { completed: moduleCompleted, total: moduleTotal };
}

function isModuleUnlocked(moduleId) {
    const module = modules.find(m => m.id === moduleId);
    if (!module) return false;
    
    if (!module.unlockCondition) return true;
    
    const completed = getCompletedChallenges();
    return module.unlockCondition(completed);
}

function updateProgress() {
    const { completed, total } = getTotalProgress();
    const percent = Math.round((completed / total) * 100);
    
    elements.progressText.textContent = `${completed} de ${total} retos completados`;
    elements.progressPercent.textContent = `${percent}%`;
    elements.progressFill.style.width = `${percent}%`;
}

function resetProgress() {
    if (confirm('¿Estás segura de que quieres reiniciar todo tu progreso? Esto no se puede deshacer.')) {
        localStorage.removeItem('omilabs-completed');
        localStorage.removeItem('omilabs-code');
        updateProgress();
        renderChallengesList();
        loadChallenge(0);
        addConsoleMessage('Progreso reiniciado. ¡Comencemos de nuevo! 🚀', 'info');
    }
}

// ========== GESTIÓN DE CÓDIGO ==========
function saveCode() {
    const allCodes = JSON.parse(localStorage.getItem('omilabs-code') || '{}');
    const challengeId = allChallenges[currentChallengeIndex].id;
    
    allCodes[challengeId] = {
        html: userCode.html,
        css: userCode.css,
        js: userCode.js
    };
    
    localStorage.setItem('omilabs-code', JSON.stringify(allCodes));
}

function loadSavedCode(challengeIndex) {
    const allCodes = JSON.parse(localStorage.getItem('omilabs-code') || '{}');
    const challengeId = allChallenges[challengeIndex].id;
    const challenge = allChallenges[challengeIndex];
    
    if (allCodes[challengeId]) {
        userCode = { ...allCodes[challengeId] };
    } else {
        userCode = { ...challenge.initialCode };
    }
}

function resetCurrentChallenge() {
    const challenge = allChallenges[currentChallengeIndex];
    userCode = { ...challenge.initialCode };
    elements.codeEditor.value = userCode[currentLang];
    saveCode();
    addConsoleMessage('Código reiniciado al estado inicial. 🔄', 'info');
}

// ========== RENDERIZADO DE RETOS ==========
function renderChallengesList() {
    const completed = getCompletedChallenges();
    let html = '';
    let globalIndex = 0;
    
    modules.forEach(module => {
        const isUnlocked = isModuleUnlocked(module.id);
        const { completed: moduleCompleted, total: moduleTotal } = getModuleProgress(module.id);
        const modulePercent = moduleTotal > 0 ? Math.round((moduleCompleted / moduleTotal) * 100) : 0;
        
        html += `
            <div class="module-section ${!isUnlocked ? 'module-locked' : ''}">
                <div class="module-header">
                    <h3 class="module-title">
                        ${!isUnlocked ? '🔒 ' : ''}${module.title}
                    </h3>
                    <span class="module-progress">${moduleCompleted}/${moduleTotal} (${modulePercent}%)</span>
                </div>
        `;
        
        if (!isUnlocked) {
            html += `
                <p class="module-locked-message">
                    ${module.id === 'intermedio' ? 'Completa 70% del nivel básico para desbloquear' : 
                      module.id === 'avanzado' ? 'Completa 60% del nivel intermedio para desbloquear' : ''}
                </p>
            `;
        } else {
            module.challenges.forEach((challenge, index) => {
                const isActive = globalIndex === currentChallengeIndex;
                const isCompleted = completed[module.id] && completed[module.id][challenge.id];
                
                html += `
                    <div class="challenge-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}"
                         data-index="${globalIndex}">
                        <div class="challenge-item-title">${challenge.title}</div>
                    </div>
                `;
                
                globalIndex++;
            });
        }
        
        // Si el módulo está bloqueado, necesitamos contar los retos de todos modos para globalIndex
        if (!isUnlocked) {
            globalIndex += module.challenges.length;
        }
        
        html += '</div>';
    });
    
    elements.challengesList.innerHTML = html;
    
    // Agregar event listeners solo a retos desbloqueados
    document.querySelectorAll('.challenge-item').forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.dataset.index);
            loadChallenge(index);
        });
    });
}

function loadChallenge(index) {
    // Guardar código del reto anterior
    if (currentChallengeIndex !== index) {
        saveCode();
    }
    
    currentChallengeIndex = index;
    const challenge = allChallenges[index];
    
    // Cargar código guardado o inicial
    loadSavedCode(index);
    
    // Actualizar UI
    elements.challengeTitle.textContent = challenge.title;
    elements.challengeDescription.innerHTML = challenge.description;
    
    elements.checklistItems.innerHTML = challenge.learned
        .map(item => `<li>${item}</li>`)
        .join('');
    
    elements.codeEditor.value = userCode[currentLang];
    
    // Actualizar botones de navegación
    elements.btnPrev.disabled = index === 0;
    elements.btnNext.disabled = index === allChallenges.length - 1;
    
    // Limpiar vista previa
    elements.previewFrame.srcdoc = '';
    
    // Actualizar lista de retos
    renderChallengesList();
    
    // Limpiar consola
    clearConsole();
    addConsoleMessage(`📚 ${challenge.moduleTitle} - ¡Presiona "Probar" cuando estés list@! 👀`, 'info');
}

// ========== GESTIÓN DE TABS ==========
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            
            // Guardar código actual
            userCode[currentLang] = elements.codeEditor.value;
            
            // Cambiar idioma
            currentLang = lang;
            
            // Actualizar UI
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Cargar código del nuevo idioma
            elements.codeEditor.value = userCode[currentLang];
        });
    });
}

// ========== CONSOLA ==========
function clearConsole() {
    elements.consoleBody.innerHTML = '';
}

function addConsoleMessage(message, type = 'info') {
    const msgElement = document.createElement('p');
    msgElement.className = `console-message console-${type}`;
    msgElement.textContent = message;
    elements.consoleBody.appendChild(msgElement);
    elements.consoleBody.scrollTop = elements.consoleBody.scrollHeight;
}

// ========== EJECUCIÓN DE CÓDIGO ==========
function runCode() {
    // Guardar código actual
    userCode[currentLang] = elements.codeEditor.value;
    saveCode();
    
    clearConsole();
    addConsoleMessage('Ejecutando código... ⚡', 'info');
    
    // Obtener el código completo
    const htmlCode = userCode.html;
    const cssCode = userCode.css;
    const jsCode = userCode.js;
    
    // Crear el documento completo
    const fullHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        ${cssCode}
    </style>
</head>
<body>
    ${htmlCode}
    <script>
        // Capturar errores y enviarlos al parent
        window.onerror = function(message, source, lineno, colno, error) {
            window.parent.postMessage({
                type: 'error',
                message: message,
                lineno: lineno
            }, '*');
            return true;
        };
        
        try {
            ${jsCode}
        } catch (error) {
            window.parent.postMessage({
                type: 'error',
                message: error.message
            }, '*');
        }
    </script>
</body>
</html>
    `;
    
    // Renderizar en el iframe
    elements.previewFrame.srcdoc = fullHTML;
    
    // Esperar a que cargue y validar
    setTimeout(() => {
        validateChallenge();
    }, 300);
}

// ========== VALIDACIÓN ==========
function validateChallenge() {
    const challenge = allChallenges[currentChallengeIndex];
    const previewDoc = elements.previewFrame.contentDocument || elements.previewFrame.contentWindow.document;
    
    console.log('Validando reto:', challenge.id, challenge.title);
    
    try {
        const result = challenge.validate(previewDoc);
        
        console.log('Resultado validación:', result);
        
        // Manejar Promises (para retos con async)
        if (result && typeof result.then === 'function') {
            result.then(actualResult => {
                console.log('Resultado promise:', actualResult);
                if (actualResult.ok) {
                    addConsoleMessage(actualResult.message, 'success');
                    markChallengeCompleted(challenge.id);
                    suggestNext();
                } else {
                    addConsoleMessage(actualResult.message, 'warning');
                }
            });
        } else if (result.ok) {
            addConsoleMessage(result.message, 'success');
            markChallengeCompleted(challenge.id);
            suggestNext();
        } else {
            addConsoleMessage(result.message, 'warning');
        }
    } catch (error) {
        console.error('Error en validación:', error);
        addConsoleMessage(`Error en la validación: ${error.message}`, 'error');
    }
}

function suggestNext() {
    if (currentChallengeIndex < allChallenges.length - 1) {
        setTimeout(() => {
            const nextChallenge = allChallenges[currentChallengeIndex + 1];
            const nextModule = modules.find(m => m.id === nextChallenge.moduleId);
            
            // Verificar si el siguiente módulo está desbloqueado
            if (isModuleUnlocked(nextChallenge.moduleId)) {
                addConsoleMessage('¿Lista para el siguiente reto? 👉', 'info');
            } else {
                addConsoleMessage(`🔒 ¡Completa más retos para desbloquear ${nextModule.title}!`, 'info');
            }
        }, 1000);
    }
}

// ========== MANEJO DE ERRORES DEL IFRAME ==========
function setupErrorHandling() {
    window.addEventListener('message', (event) => {
        if (event.data.type === 'error') {
            const errorMsg = event.data.lineno 
                ? `Error en línea ${event.data.lineno}: ${event.data.message}`
                : `Error: ${event.data.message}`;
            addConsoleMessage(errorMsg, 'error');
        }
    });
}

// ========== ATAJOS DE TECLADO ==========
function setupKeyboardShortcuts() {
    elements.codeEditor.addEventListener('keydown', (e) => {
        // Ctrl+Enter o Cmd+Enter para ejecutar
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            runCode();
        }
        
        // Tab para indentar (opcional, para mejor experiencia)
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = e.target.selectionStart;
            const end = e.target.selectionEnd;
            const value = e.target.value;
            
            e.target.value = value.substring(0, start) + '    ' + value.substring(end);
            e.target.selectionStart = e.target.selectionEnd = start + 4;
        }
    });
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    elements.btnRun.addEventListener('click', runCode);
    elements.btnReset.addEventListener('click', resetCurrentChallenge);
    elements.btnResetProgress.addEventListener('click', resetProgress);
    elements.btnClearConsole.addEventListener('click', () => {
        clearConsole();
        addConsoleMessage('Consola limpia. 🧹', 'info');
    });
    
    elements.btnPrev.addEventListener('click', () => {
        if (currentChallengeIndex > 0) {
            loadChallenge(currentChallengeIndex - 1);
        }
    });
    
    elements.btnNext.addEventListener('click', () => {
        if (currentChallengeIndex < allChallenges.length - 1) {
            loadChallenge(currentChallengeIndex + 1);
        }
    });
    
    // Guardar código mientras escribe (con debounce)
    let saveTimeout;
    elements.codeEditor.addEventListener('input', () => {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
            userCode[currentLang] = elements.codeEditor.value;
            saveCode();
        }, 1000);
    });
}

// ========== INICIALIZACIÓN ==========
function init() {
    // Forzar scroll al inicio
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Desactivar restauración automática del scroll
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    
    renderChallengesList();
    loadChallenge(0);
    initTabs();
    setupEventListeners();
    setupKeyboardShortcuts();
    setupErrorHandling();
    updateProgress();
    
    addConsoleMessage('¡Bienvenida a OmiLabs, Naomi! 💜 Aquí aprenderás a programar de forma divertida. ¡Comencemos! 🚀', 'success');
}

// Iniciar la aplicación cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
