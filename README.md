# 🔬 OmiLabs - Laboratorio de Programación para Principiantes

¡Bienvenida a OmiLabs! Un proyecto interactivo diseñado para que Naomi (y cualquier principiante) aprenda HTML, CSS y JavaScript de forma divertida, sin aburrirse.

## ✨ Características

- **6 retos interactivos** que enseñan los fundamentos de desarrollo web
- **Editor de código en vivo** con pestañas para HTML, CSS y JavaScript
- **Vista previa instantánea** de tu código
- **Validación automática** con feedback amigable
- **Progreso guardado** en tu navegador (localStorage)
- **100% offline** - no necesita conexión a internet
- **Sin frameworks** - puro HTML, CSS y JavaScript vanilla

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
cd omilabs
git init
git add .
git commit -m "Initial commit: OmiLabs project"
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

## 📚 Los 6 Retos

1. **Hola, Naomi 💜** - Aprende las etiquetas básicas de HTML
2. **Píntalo bonito 🎨** - Dale color y estilo con CSS
3. **Tarjetita personal 🃏** - Crea componentes con clases y listas
4. **Botón mágico ✨** - Primera interacción con JavaScript
5. **Contador de mates 🧉** - Variables y actualización dinámica
6. **Mini proyecto: Mi mini perfil 🌟** - ¡Combina todo lo aprendido!

## 🎮 Atajos de teclado

- `Ctrl + Enter` (o `Cmd + Enter` en Mac) - Ejecutar código
- `Tab` - Indentar código

## 🛠️ Estructura del Proyecto

```
omilabs/
│
├── index.html          # Página principal
├── assets/
│   ├── styles.css     # Estilos de la aplicación
│   └── app.js         # Lógica, retos y validaciones
└── README.md          # Este archivo
```

## 💾 Datos guardados

OmiLabs guarda tu progreso en el navegador usando `localStorage`:
- Retos completados
- Código que vas escribiendo en cada reto

Para reiniciar todo, usa el botón "🔄 Reiniciar" en la barra lateral.

## 🎨 Personalización

¿Quieres agregar más retos? Abre `assets/app.js` y agrega objetos al array `challenges`. Cada reto necesita:

```javascript
{
    id: 7,
    title: "Nombre del reto",
    description: "Explicación amigable...",
    learned: ["Cosa 1", "Cosa 2", "Cosa 3"],
    initialCode: {
        html: "...",
        css: "...",
        js: "..."
    },
    validate: function(doc) {
        // Tu lógica de validación
        return { ok: true, message: "¡Bien hecho!" };
    }
}
```

## 🤝 Contribuir

Si quieres mejorar OmiLabs:
1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nuevo-reto`)
3. Commit tus cambios (`git commit -m 'Agrego nuevo reto'`)
4. Push a la rama (`git push origin feature/nuevo-reto`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 💜 Créditos

Creado con amor para Naomi y todas las personas que quieren aprender a programar de forma divertida.

---

¡Feliz programación! 🚀✨
