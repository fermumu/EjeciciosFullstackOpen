# Diagrama de secuencia: Crear una nueva nota en la versión SPA de la aplicación

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: El usuario escribe una nota y hace clic en "Save"

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of server: El cuerpo contiene la nueva nota en formato JSON
    server-->>browser: Respuesta 201 Created o similar
    deactivate server

    Note right of browser: El navegador actualiza la lista de notas localmente sin recargar la página
