📦 project:
  📛 name: "**Entrega 1 & 2 – API Products & Carts + Realtime Products**"
  👩‍💻 author: "**Valentina Rodrigues Antunes**"
  📝 description: >
    Proyecto backend desarrollado con **Node.js y Express**.
    Incluye una **API REST** para la gestión de **productos y carritos**
    con persistencia en **archivos JSON**, y una **vista en tiempo real**
    utilizando **Handlebars y WebSockets (Socket.io)**.
    El objetivo es practicar backend, rutas, persistencia, websockets
    y renderizado de vistas.

🛠️ technologies:
  - 🟢 Node.js
  - 🚀 Express
  - 🧩 Express Handlebars
  - 🔌 Socket.io
  - 🆔 UUID
  - 📂 File System
  - ⚡ Thunder Client

📁 structure:
  - 📄 src/app.js
  - 📄 src/routes/products.router.js
  - 📄 src/routes/carts.router.js
  - 📄 src/routes/views.router.js
  - 📄 src/managers/ProductManager.js
  - 📄 src/managers/CartManager.js
  - 📄 src/views/home.handlebars
  - 📄 src/views/realTimeProducts.handlebars
  - 📄 src/data/products.json
  - 📄 src/data/carts.json
  - 📄 public/

▶️ run:
  🧩 steps:
    1. `npm install`
    2. `node src/app.js`
  🌐 server: "**http://localhost:8080**"

🔗 endpoints:
  🛍️ products:
    1. `GET    /api/products`
    2. `GET    /api/products/:pid`
    3. `POST   /api/products`
    4. `PUT    /api/products/:pid`
    5. `DELETE /api/products/:pid`

  🛒 carts:
    1. `POST   /api/carts`
    2. `GET    /api/carts/:cid`
    3. `POST   /api/carts/:cid/product/:pid`

🖥️ views:
  🏠 home:
    - URL: `http://localhost:8080/`
    - Muestra la lista de productos usando **Handlebars**

  ⚡ realtime products:
    - URL: `http://localhost:8080/realtimeproducts`
    - Permite **agregar y eliminar productos en tiempo real**
    - Actualiza automáticamente la lista usando **Socket.io**

🧪 testing:
  🔧 tool: "**Thunder Client**"
  ✅ api tests:
    1. Listar productos
    2. Crear producto
    3. Obtener producto por ID
    4. Eliminar producto
    5. Crear carrito y agregar productos

📌 notes:
  ℹ️ info: >
    - La persistencia se realiza mediante **archivos JSON**.
    - La vista realtime funciona sin recargar la página gracias a WebSockets.
    - Los eventos de creación y eliminación de productos
      actualizan la vista automáticamente.
    - El proyecto cumple con los requisitos de la **Entrega 1 y Entrega 2**.


