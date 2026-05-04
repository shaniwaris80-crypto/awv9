/* FACTURA AW — Firebase Config
   Modo CLOUD activado.
   Guarda datos editables en Realtime Database.
   No guarda PDFs en Storage: los PDFs se regeneran desde la factura.
*/

window.FACTURA_FIREBASE_CONFIG = {
  enabled: true,
  companyId: "aw",

  // No guardar PDF en Firebase Storage
  savePdfToStorage: false,
  useStorage: false,

  firebaseConfig: {
    apiKey: "AIzaSyB_6p9FWV362ekLKDcX_trlOaui9aqafUI",
    authDomain: "awv9-f3e14.firebaseapp.com",
    databaseURL: "https://awv9-f3e14-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "awv9-f3e14",
    storageBucket: "awv9-f3e14.firebasestorage.app",
    messagingSenderId: "328161624199",
    appId: "1:328161624199:web:8b6eb4c39d14b16fd67822",
    measurementId: "G-3FNC0DXRG2"
  },

  companyDefaults: {
    appName: "FACTURA AW",
    companyName: "Mohammad Arslan Waris",
    nif: "X6389988J",
    address: "Calle San Pablo 17, 09003 Burgos",
    phone: "631 667 893",
    email: "shaniwaris80@gmail.com",
    defaultVatDisplayMode: "simple",
    defaultTheme: "light",
    invoicePrefix: "FA",
    internalPin: "1234"
  }
};
