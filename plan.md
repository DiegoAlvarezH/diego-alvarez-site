# Tarea: Refactorizar sección "Proyectos Destacados" del portafolio

## Contexto
Necesito reemplazar completamente la sección de proyectos destacados. Elimina cualquier mención o card de "Hyperautomatización". Los nuevos proyectos son los que se listan a continuación.

---

## Fase 0 — Reconocimiento
Antes de tocar nada:
1. Localiza el componente o archivo que renderiza la sección de proyectos (busca por `Hyperautomatización`, `projects`, `Projects`, `destacados`).
2. Identifica la estructura de datos que alimenta las cards (array de objetos, CMS, JSON, etc.).
3. Reporta la ruta exacta de cada archivo que vas a modificar. No toques nada aún.

---

## Fase 1 — Reemplazar datos de proyectos

Sustituye el array/estructura de proyectos con los siguientes 6 proyectos. Mantén la misma forma del objeto que ya existe en el código; solo añade los campos `githubUrl` y `demoUrl` si no existen.

````ts
const projects = [
  {
    title: "Chat en Tiempo Real",
    description:
      "Aplicación de mensajería en tiempo real construida con Node.js, React, Socket.IO y TailwindCSS. Implementa salas de chat, notificaciones toast con Toastify y comunicación bidireccional instantánea mediante WebSockets.",
    tags: ["Node.js", "React", "Socket.IO", "TailwindCSS", "Toastify"],
    githubUrl: "https://github.com/DiegoAlvarezH/chat-socketio-react",
    demoUrl: null,
  },
  {
    title: "Plataforma de Videos BeMaster",
    description:
      "Plataforma multimedia fullstack para subir y consumir contenido en video. Backend en Node.js con autenticación basada en cookies, validación de esquemas con Zod y gestión de sesiones segura. Frontend en React con reproductor integrado.",
    tags: ["Node.js", "React", "Zod", "Cookies", "REST API"],
    githubUrl: "https://github.com/DiegoAlvarezH/app-videos-bemaster",
    demoUrl: null,
  },
  {
    title: "Plataforma de Blogs",
    description:
      "CMS personal para crear y gestionar tu propio blog. Los usuarios pueden publicar, editar y organizar entradas con una interfaz limpia centrada en la escritura.",
    tags: ["React", "Node.js", "REST API"],
    githubUrl: null,
    demoUrl: null,
  },
  {
    title: "Marketplace MagicLog",
    description:
      "Marketplace con gestión de inventario construido con Vite, React y Node.js. Backend en Express con autenticación JWT, manejo de cookies, validación Zod y base de datos NoSQL mediante Mongoose. Incluye suite de pruebas unitarias con Jest.",
    tags: ["Vite", "React", "Node.js", "MongoDB", "Mongoose", "JWT", "Zod", "Jest"],
    githubUrl: null,
    demoUrl: "https://65fdebbcbeabdc5fa49ee515--splendorous-nougat-00fbb9.netlify.app/",
  },
  {
    title: "Portafolio Anterior",
    description:
      "Primera versión del portafolio personal. Deprecado y reemplazado por la versión actual.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/DiegoAlvarezH/Portfolio",
    demoUrl: null,
    deprecated: true, // renderizar con badge "Deprecado" o estilo atenuado
  },
  {
    title: "App del Clima",
    description:
      "Aplicación para consultar el clima actual por ciudad usando la API de OpenWeatherMap. Muestra temperatura, condición meteorológica e ícono en tiempo real.",
    tags: ["React", "OpenWeatherMap API", "REST API"],
    githubUrl: https://github.com/DiegoAlvarezH/app-weather,
    demoUrl: null,
  },
];
````

---

## Fase 2 — Actualizar la UI de cada card

Cada card de proyecto debe mostrar:

1. **Título** del proyecto
2. **Descripción** (texto provisto arriba)
3. **Tags** como badges/chips
4. **Botón GitHub** → solo si `githubUrl !== null`. Abre en nueva pestaña (`target="_blank" rel="noopener noreferrer"`).
5. **Botón Demo** → solo si `demoUrl !== null`. Mismo comportamiento.
6. Si `deprecated: true`, aplica estilos atenuados (opacidad reducida) y añade un badge visible que diga "Deprecado".

Si los botones de link ya existen en las cards actuales, reutiliza su estilo. No rediseñes lo que no es necesario.

---

## Fase 3 — Limpieza

* Elimina cualquier referencia a "Hyperautomatización" (datos, imports, constantes, comentarios).
* Si hay assets (imágenes/íconos) exclusivos de ese proyecto que ya no se usan, elimínalos también.
* Asegúrate de que no queden `console.log` de debug ni imports sin usar.

---

## Restricciones

* No cambies el layout general del portafolio, solo la sección de proyectos.
* Mantén el sistema de diseño (colores, tipografía, espaciado) ya definido.
* No instales dependencias nuevas.
* Si algún campo como `githubUrl` o `demoUrl` no existe en la estructura actual, agrégalo sin romper los proyectos que ya tienen datos.

---

## Entregables esperados

Al terminar, reporta:

* Archivos modificados con sus rutas
* Proyectos renderizados con sus links activos
* Confirmación de que "Hyperautomatización" fue eliminado completamente

````

---

Listo para pegarlo en Claude Code. Un par de notas:
- Dejé `githubUrl: null` y `demoUrl: null` en los proyectos donde no me diste link (blog y clima). Si los tienes, dímelos y los agrego.
- El proyecto **Portafolio Anterior** lo incluí con flag `deprecated: true` para que se vea diferenciado, pero si prefieres simplemente no mostrarlo, te lo quito del array.
````