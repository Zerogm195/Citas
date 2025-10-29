# 💬 Citas Textuales (Citas App)

## 🌟 Descripción del Proyecto

Este es un proyecto web simple diseñado para **mostrar citas textuales de forma secuencial** al hacer clic en un botón. La aplicación tiene como objetivo presentar frases y referencias importantes de distintas fuentes (académicas, teóricas, económicas, etc.) de manera dinámica.

---

## 🚀 Funcionamiento

La aplicación se compone de un botón y un área de texto:

1.  **Botón:** Al hacer clic en "**Mostrar una cita**," se activa la función que actualiza el contenido.
2.  **Visualización:** El texto debajo del botón muestra la cita actual, incluyendo su referencia bibliográfica (Autor, Año, Página).

### Modo de Presentación
Actualmente, el script está configurado para mostrar las citas en **orden secuencial (una por una)**, reiniciando al principio de la lista una vez que se han mostrado todas.

---

## 📝 Instalación y Ejecución

1.  **Clonar el repositorio** (si aplica) o descargar los archivos.
2.  Asegúrate de tener la estructura:
    * `index.html`
    * Carpeta `assets/` con `script.js` y `style.css`.
3.  Abre `index.html` en cualquier navegador web moderno.

---

## 🛠️ Personalización

* Para añadir nuevas citas, simplemente agrégalas al array `citas` en `script.js`.
* Para cambiar el modo de presentación de **Secuencial** a **Aleatorio**, descomenta y utiliza el bloque de código de la función `mostrarCitas()` que está actualmente comentado.
