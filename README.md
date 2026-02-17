# 🔬 OmiLabs - Laboratorio de Programación para Principiantes

¡Bienvenida a OmiLabs! Un proyecto interactivo diseñado para que Naomi (y cualquier principiante) aprenda HTML, CSS y JavaScript de forma divertida, sin aburrirse.

## ✨ Características

- **17 retos interactivos** organizados en 3 niveles de dificultad
- **Sistema de progresión** con módulos desbloqueables
- **Editor de código en vivo** con pestañas para HTML, CSS y JavaScript
- **Vista previa instantánea** de tu código
- **Validación automática** con feedback detallado paso a paso
- **Progreso guardado** en tu navegador (localStorage)
- **Sistema de reinicio** para empezar de nuevo cuando quieras
- **100% offline** - no necesita conexión a internet
- **Sin frameworks** - puro HTML, CSS y JavaScript vanilla
- **Diseño responsive** - funciona en móviles, tablets y escritorio

## 🚀 Cómo usar (Local)

### Opción 1: Abrir directamente
1. Descarga o clona este proyecto
2. Navega a la carpeta `omilabs`
3. Haz doble clic en `index.html`
4. ¡Listo! Ya puedes empezar a programar 🎉

### Opción 2: Con un servidor local (recomendado para desarrollo)
Si tienes Python instalado:
```bash
cd omilabs
python -m http.server 8000
```

Luego abre tu navegador en: `http://localhost:8000`

Con Node.js:
```bash
npx http-server omilabs -p 8000
```

## 🌐 Hostear en GitHub Pages (para compartir tu proyecto)

### Paso 1: Crear un repositorio en GitHub
1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio
2. Nómbralo como quieras (ejemplo: `omilabs`)
3. Marca la opción "Public"

### Paso 2: Subir los archivos
Desde la terminal, en la carpeta del proyecto:

```bash
cd OmiLabs
git init
git add .
git commit -m "Initial commit: OmiLabs v2.0 - Sistema de módulos"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/omilabs.git
git push -u origin main
```

### Paso 3: Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Click en "Settings" (Configuración)
3. En el menú lateral, click en "Pages"
4. En "Source", selecciona la rama `main` y la carpeta `/ (root)`
5. Click en "Save"
6. Espera unos minutos y tu sitio estará disponible en:
   `https://TU_USUARIO.github.io/omilabs/`

## 🌐 APIs utilizadas

Los retos avanzados utilizan:
- **[JSONPlaceholder](https://jsonplaceholder.typicode.com/)**: API gratuita de prueba con posts, users, comments
- Endpoints usados: `/posts?_limit=5` y `/posts/1`
- No requiere autenticación
- Perfecta para aprender fetch, async/await y manejo de datos JSON

## 📚 Los 17 Retos

### 🌱 Nivel Básico (6 retos)
Aprende los fundamentos de HTML, CSS y JavaScript:

1. **Hola, Naomi 💜** - Aprende las etiquetas básicas de HTML (`<h1>`, `<p>`)
2. **Píntalo bonito 🎨** - Dale color y estilo con CSS (background-color, color)
3. **Tarjetita personal 🃏** - Crea componentes con clases, listas y cards
4. **Botón mágico ✨** - Primera interacción con JavaScript (addEventListener)
5. **Contador de mates 🧉** - Variables y actualización dinámica del DOM
6. **Mini proyecto: Mi mini perfil 🌟** - ¡Combina todo lo aprendido en un proyecto completo!

**Objetivo:** Completa al menos 70% (4-5 retos) para desbloquear el nivel intermedio.

### 🚀 Nivel Intermedio (6 retos)
Manipulación del DOM, validaciones y almacenamiento:

1. **Lista dinámica 📝** - Crear elementos con createElement y appendChild
2. **Validador de formulario ✅** - Validar inputs y mostrar mensajes
3. **Modo noche 🌙** - Alternar entre tema claro y oscuro con classList
4. **Persistencia local 💾** - Guardar datos con localStorage
5. **Buscador en lista 🔍** - Filtrar elementos en tiempo real
6. **Fetch simulado ⏳** - Introducción a código asíncrono con Promises

**Objetivo:** Completa al menos 60% (4 retos) para desbloquear el nivel avanzado.

### ⚡ Nivel Avanzado (5 retos)
APIs reales, optimizaciones y arquitectura:

1. **Async real 🌐** - Fetch API real con async/await y JSONPlaceholder
2. **Retry automático 🔄** - Manejo de errores y reintentos automáticos
3. **Debounce ⏱️** - Optimización de rendimiento con debouncing
4. **Mini arquitectura 🏗️** - Organización de código en módulos (init, render, handleEvents)
5. **Proyecto Final Avanzado 🚀** - App completa: API + localStorage + filtros + modo oscuro

**¡Completa todos los retos para convertirte en desarrolladora web!** 💜✨

## 🎮 Cómo funciona

### Sistema de Progresión
- **Progreso visual**: Ve tu avance global en la barra superior
- **Módulos desbloqueables**: Completa un nivel para desbloquear el siguiente
- **Feedback paso a paso**: Las validaciones te guían con mensajes detallados
- **Guardado automático**: Tu código y progreso se guardan mientras trabajas
- **Checkpoints visual**: Marca de ✓ en los retos completados

### Sistema de Validación Inteligente
Cada reto tiene validaciones personalizadas que:
- ✅ Verifican tu código paso por paso (Paso 1/3, Paso 2/3, etc.)
- ✅ Te dicen exactamente qué falta o qué está mal
- ✅ Incluyen ejemplos de código cuando necesitas ayuda
- ✅ Muestran mensajes motivadores cuando completas un reto
- ✅ Prueban funcionalidad real (no solo buscan texto)

Ejemplo de feedback: *"✅ Pasos 1-2 OK | ❌ Paso 3/3: Dentro del `<ul>` agrega items con `<li>`. Ejemplo: `<li>Programar</li>`"*

### Navegación
- Usa los **botones "Anterior/Siguiente"** para moverte entre retos
- Haz **click en cualquier reto** de la barra lateral para ir directamente
- El reto actual se marca en **morado** en la lista
- Los módulos bloqueados muestran 🔒 y el porcentaje necesario

## 🎮 Atajos de teclado

- `Ctrl + Enter` (o `Cmd + Enter` en Mac) - Ejecutar código (botón "Probar")
- `Tab` - Indentar código

## 🛠️ Estructura del Proyecto

```
OmiLabs/
│
├── index.html          # Página principal con estructura HTML
├── assets/
│   ├── styles.css     # Estilos completos (responsive, variables CSS)
│   └── app.js         # Lógica completa de la aplicación
│       ├── Datos de módulos y retos (17 retos totales)
│       ├── Sistema de progreso y localStorage
│       ├── Gestión del editor y pestañas
│       ├── Renderizado dinámico
│       ├── Validaciones personalizadas
│       └── Ejecución de código en iframe
└── README.md          # Este archivo

Total: ~3000 líneas de código
```

## 🧪 Tecnologías y conceptos implementados

### En el Proyecto
- **Vanilla JavaScript ES6+**: Sin dependencias externas
- **LocalStorage API**: Persistencia de datos en el navegador
- **DOM Manipulation**: querySelector, createElement, classList, etc.
- **Event Handling**: addEventListener, click, input, submit events
- **Iframe Sandboxing**: Ejecución segura de código del usuario
- **Responsive Design**: Media queries, flexbox, diseño adaptativo
- **CSS Variables**: Sistema de theming con custom properties
- **Progressive Unlock System**: Lógica de desbloqueo de contenido

### Que Aprenderás Completando los Retos
- HTML semántico y estructura
- CSS (colores, layouts, cards, responsive)
- JavaScript (variables, funciones, eventos)
- DOM manipulation (querySelector, createElement, appendChild)
- Formularios y validación
- localStorage y persistencia de datos
- Fetch API y peticiones HTTP
- Async/await y Promises
- Optimización (debouncing)
- Arquitectura de aplicaciones
- Manejo de errores
- Y mucho más...

## 💾 Datos guardados

OmiLabs guarda tu progreso en el navegador usando `localStorage`:
- **Progreso por módulo**: Retos completados en básico, intermedio y avanzado
- **Código de cada reto**: Todo lo que escribes se guarda automáticamente
- **Preferencias**: El estado de tus ediciones se mantiene entre sesiones

### Reiniciar progreso
- Usa el botón **"🔄 Reiniciar"** en la barra lateral para borrar todo
- Esto eliminará todos los retos completados y el código guardado
- ¡Ideal para empezar de nuevo o practicar otra vez!

## 🎨 Personalización

¿Quieres agregar más retos? Abre `assets/app.js` y agrega objetos al array `challenges` dentro de cada módulo. Cada reto necesita:

```javascript
{
    id: "basico-7",
    title: "Nombre del reto 🎯",
    description: "Explicación amigable de qué aprenderá el estudiante...",
    learned: [
        "Concepto 1 que aprenderás",
        "Concepto 2 que aprenderás",
        "Concepto 3 que aprenderás"
    ],
    initialCode: {
        html: "<!-- Código HTML inicial -->",
        css: "/* Código CSS inicial */",
        js: "// Código JavaScript inicial"
    },
    validate: function(doc) {
        // Tu lógica de validación
        // Retorna { ok: true/false, message: "Mensaje de feedback" }
        return { ok: true, message: "¡Completado! 🎉" };
    }
}
```

### Crear un nuevo módulo
Puedes agregar un cuarto nivel (por ejemplo, "Experto") al array `modules`:

```javascript
{
    id: "experto",
    title: "🔥 Nivel Experto",
    unlockCondition: function(progressData) {
        // Desbloquear cuando se complete 80% del nivel avanzado
        const avanzadoCompleted = progressData.avanzado ? 
            Object.values(progressData.avanzado).filter(v => v).length : 0;
        const avanzadoTotal = 5; // número de retos en avanzado
        return (avanzadoCompleted / avanzadoTotal) * 100 >= 80;
    },
    challenges: [
        // ... tus retos aquí
    ]
}
```

## 🤝 Contribuir

Si quieres mejorar OmiLabs:
1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nuevo-reto`)
3. Commit tus cambios (`git commit -m 'Agrego nuevo reto de arrays'`)
4. Push a la rama (`git push origin feature/nuevo-reto`)
5. Abre un Pull Request

### Ideas para contribuir
- ✨ Agregar más retos (nivel experto, mini-proyectos, etc.)
- 🌍 Traducir a otros idiomas
- 🎨 Mejorar el diseño y UX
- 🐛 Reportar y arreglar bugs
- 📚 Mejorar documentación
- ♿ Mejorar accesibilidad

## 📊 Estadísticas del proyecto

- **Líneas de código**: ~3000 (2182 en app.js + 548 en styles.css + HTML)
- **Retos totales**: 17 distribuidos en 3 niveles
- **Conceptos enseñados**: 50+ (HTML, CSS, JavaScript, APIs, etc.)
- **Validaciones personalizadas**: 17 funciones únicas
- **Mensajes de feedback**: 80+ mensajes educativos
- **Archivos**: 3 archivos principales
- **Dependencias**: 0 (100% vanilla JavaScript)
- **Compatibilidad**: Navegadores modernos (Chrome, Firefox, Safari, Edge)

##  Tips para estudiantes

1. **Lee las descripciones**: Cada reto explica qué vas a aprender
2. **Mira el checklist**: Te dice exactamente qué conceptos practicarás
3. **Lee los mensajes de validación**: Te guían paso a paso con feedback específico
4. **Experimenta**: No tengas miedo de probar cosas nuevas, el botón Reset está ahí
5. **Ve despacio**: Es mejor entender bien cada concepto que pasar rápido
6. **Juega con el código inicial**: Modifícalo para ver qué pasa
7. **Usa la consola**: Los mensajes te dirán exactamente qué falta o qué está bien

## ❓ Preguntas frecuentes

**P: ¿Por qué mi código no se ejecuta?**  
R: Asegúrate de presionar el botón "▶️ Probar". El código no se ejecuta automáticamente mientras escribes.

**P: ¿Cómo desbloqueo el siguiente nivel?**  
R: Completa el porcentaje requerido del nivel actual (70% para básico, 60% para intermedio).

**P: ¿Se guardan mis cambios?**  
R: Sí, todo se guarda automáticamente en localStorage. Incluso si cierras el navegador, tu progreso y código permanecen.

**P: ¿Puedo hacer trampa y ver las respuestas?**  
R: Sí, el código está en `assets/app.js`, pero... ¿dónde está la diversión y el aprendizaje? 😉

**P: ¿Funciona sin internet?**  
R: Sí, excepto los retos del nivel avanzado que usan APIs reales (retos "Async real" y "Proyecto Final").

**P: ¿Puedo agregar más retos?**  
R: ¡Absolutamente! Ve la sección de Personalización más arriba.

**P: ¿Por qué algunos módulos dicen "🔒 Bloqueado"?**  
R: Es parte del sistema de progresión. Completa retos del nivel actual para desbloquear el siguiente.

## 🎯 Objetivos del proyecto

OmiLabs fue diseñado con estos principios:

- ✅ **Aprendizaje incremental**: De simple a complejo, paso a paso
- ✅ **Feedback inmediato**: Validaciones que enseñan, no solo califican
- ✅ **Motivación**: Sistema de progreso visual y mensajes alentadores
- ✅ **Autonomía**: Todo funciona offline, sin depender de servicios externos
- ✅ **Práctica real**: Los retos usan patrones que se ven en desarrollo real
- ✅ **Sin frustración**: Los mensajes te guían cuando algo no funciona

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 💜 Créditos

Creado con amor para Naomi y todas las personas que quieren aprender a programar de forma divertida.

**OmiLabs** es un proyecto educativo completo con:
- 17 retos interactivos progresivos
- Sistema de validación inteligente
- Editor de código integrado
- ~3000 líneas de código vanilla JavaScript
- Diseño responsive y accesible

¡Comparte este proyecto con quien quiera empezar en el mundo de la programación! 🌟

---

**Versión actual**: 2.0 (Sistema de módulos con 3 niveles)

¡Feliz programación! 🚀✨
