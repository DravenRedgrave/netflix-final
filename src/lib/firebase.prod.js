import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDaCs5OPsewVwVaEPirC4P3thV3bSnmxQ0",
    authDomain: "netflix-original-110b7.firebaseapp.com",
    projectId: "netflix-original-110b7",
    storageBucket: "netflix-original-110b7.appspot.com",
    messagingSenderId: "798453289699",
    appId: "1:798453289699:web:4f1e65ff71722403f42bd6"
};
const firebase = Firebase.initializeApp(config);



export {firebase};