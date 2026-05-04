# FACTURA AW CLOUD v2.1 FIX

Esta versión corrige el problema de que no funcionaban los clicks.

Cambios:
- No usa SDK externo de Firebase.
- Usa Firebase REST API directamente.
- Menú, botones y formularios con JavaScript propio.
- Conectado a tu proyecto awv9-f3e14.
- Guarda facturas, compras, productos, clientes y gastos en Realtime Database.
- PDF cliente se genera desde la factura, no se guarda.

Para probar:
1. Sube esta carpeta a Firebase Hosting o GitHub Pages.
2. Pega firebase.rules.json en Realtime Database > Rules.
3. Importa el JSON admin en Realtime Database si no está puesto.
4. Abre la app e inicia sesión.

Si antes abriste otra versión, borra caché o prueba en incógnito.
