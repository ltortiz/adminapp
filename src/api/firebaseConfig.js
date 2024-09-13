// Importar la librería de Firebase
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Configuración de Firebase, reemplaza con tus credenciales de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAcpFxcYMeNeA2-p5AifwY4Rp0AhChLe7I",
  authDomain: "adminapp-b9f3d.firebaseapp.com",
  projectId: "adminapp-b9f3d",
  storageBucket: "adminapp-b9f3d.appspot.com",
  messagingSenderId: "54923760802",
  appId: "1:54923760802:web:5ebd1c56706ce2230533fb"
};


// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

// Inicializa Firestore
const db = getFirestore(app);

// Inicializar Firebase Auth con AsyncStorage para persistencia
export { auth, db };
