import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwlNlzYp-91GSgMgY4oUQzhNUfH3aXzhE",
    authDomain: "project-2-roundtable.firebaseapp.com",
    projectId: "project-2-roundtable",
    storageBucket: "project-2-roundtable.appspot.com",
    messagingSenderId: "903623292266",
    appId: "1:903623292266:web:e8ecce57a47f2247802113",
    measurementId: "G-L5NRZ5FEMV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;