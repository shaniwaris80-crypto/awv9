# FACTURA AW CLOUD v2.0

App conectada a Firebase con tus datos:

- Project ID: `awv9-f3e14`
- Realtime Database: `https://awv9-f3e14-default-rtdb.europe-west1.firebasedatabase.app`
- Company ID: `aw`
- PDFs no se guardan en Storage. Se regeneran desde los datos de la factura.

## Qué incluye

- Login Firebase.
- Facturas sincronizadas en varios dispositivos.
- Reabrir, modificar y volver a generar PDF.
- Opción de limpiar ventas y empezar de 0 conservando productos/clientes.
- Productos con código corto: MV, MM, CL, OK, etc.
- Búsqueda por código y nombre.
- Si modificas un producto, puede sincronizarse en facturas borrador/reabiertas.
- Sistema de precio compra, venta, precio recomendado y mínimo cliente.
- En factura, los campos distinguen `kg`, `kg/caja`, `kg bruto`, `tara kg` con placeholders.
- Compras más fáciles, con sugerencias, pegado de lista y botones -0,10/+0,10.
- Stock calculado desde compras, facturas, tiendas propias y mermas.
- Tiendas propias: San Pablo, San Lesmes, Santiago.
- Mermas y pérdidas físicas.
- Informe interno con PIN.
- PDF cliente limpio: no muestra costes, márgenes ni beneficios.
- IVA cliente simple: arriba tipos usados, al final solo IVA total.
- Modo blanco por defecto y negro opcional.

## Primer uso

1. En Firebase Console activa `Authentication -> Email/Password`.
2. Crea un usuario.
3. En `Realtime Database -> Rules`, pega el contenido de `firebase.rules.json`.
4. Abre la app e inicia sesión.
5. Si la base está vacía, el primer usuario se crea como admin automáticamente.

Si el bootstrap automático falla por reglas, crea manualmente:

```json
{
  "userCompanies": {
    "TU_UID": { "aw": true }
  },
  "companies": {
    "aw": {
      "users": {
        "TU_UID": {
          "email": "tu@email.com",
          "name": "Arslan",
          "role": "admin",
          "active": true
        }
      }
    }
  }
}
```

## Probar localmente

No abras `index.html` con doble clic. Usa servidor local:

```bash
cd FACTURA_AW_CLOUD_v2_0
python3 -m http.server 5500
```

Abre:

```text
http://localhost:5500
```

## Publicar con Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

Selecciona:

- Existing project: `awv9-f3e14`
- Public directory: `.`
- Single page app: `yes`

## PIN interno

PIN inicial: `1234`.

Puedes cambiarlo en Ajustes.
