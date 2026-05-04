FACTURA AW v1.8 PRO
====================

Proyecto PWA completo para facturación profesional, pedidos, compras, stock, tiendas propias, mermas, cobros, informes internos privados y sincronización opcional con Firebase.

ARCHIVOS
--------
index.html
styles.css
app.js
firebase-config.js
manifest.webmanifest
service-worker.js
icon.svg
firebase.rules.json
README.txt

PIN INICIAL
-----------
1234

NOVEDADES v1.8
--------------
- Códigos cortos únicos por producto.
- Buscar productos por código o nombre en facturas, compras, pedidos, stock y productos.
- Códigos por defecto: MV, MM, CL, OK, LM, JG, etc.
- Campo Código editable en la ficha de producto.
- Prevención automática de códigos duplicados.
- El código aparece en la cuadrícula de facturas, compras y tiendas.
- El código aparece en la factura PDF cliente.
- El código aparece en reportes internos, stock, Excel y márgenes.
- Nuevo buscador de historial por código dentro de Stock.
- Al buscar un código muestra dónde se compró, a quién se vendió, qué fue a tiendas, mermas y valor sobrante.
- Pedidos WhatsApp también aceptan códigos cortos, por ejemplo: 2 MV, 5 MM, 40 CL.
- Si escribes un código exacto y sales del campo, se carga el producto automáticamente.

FUNCIONES PRINCIPALES
---------------------
- Factura cliente limpia: no muestra costes, márgenes, beneficios ni pérdidas.
- Informe interno privado con costes, márgenes, pérdidas, comisiones, transporte, stock y beneficios.
- Facturas reabribles y editables.
- Pedidos: convertir a factura, compra o compra + factura.
- Compras proveedor con precios de compra.
- Stock / almacén: sobrante por producto, valor en euros, asignación a tiendas y mermas.
- Precio recomendado de venta según coste y margen objetivo.
- Botón de precios recomendados y mínimos por cliente.
- IVA por producto y por línea.
- Factura cliente con IVA simple: arriba muestra IVA aplicado y abajo solo IVA total.
- Modo blanco por defecto y modo negro opcional.
- Panel lateral desplegable.
- Decimales con coma o punto.
- Botones +0,10 / -0,10.
- Exportación Excel.
- Backup JSON.
- Firebase opcional para ver facturas en varios dispositivos.

FIREBASE
--------
Para usar en varios dispositivos:
1. Crear proyecto Firebase.
2. Activar Authentication con email/contraseña.
3. Activar Realtime Database.
4. Pegar configuración en firebase-config.js.
5. Subir reglas firebase.rules.json.
6. Abrir Ajustes > Activar Cloud.

NOTA SOBRE PDF
--------------
No es necesario guardar PDFs en la nube. La app guarda los datos de factura y puede regenerar el PDF cuando lo necesites.
