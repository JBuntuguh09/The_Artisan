import {initializeApp} from 'firebase/app';




const firebaseConfig = {
    apiKey: "AIzaSyBvrql22BmyB0X0B6t6BloCjrUjpTrqLHg",
    authDomain: "the-artisan-6249b.firebaseapp.com",
    databaseURL: "https://the-artisan-6249b-default-rtdb.firebaseio.com",
    projectId: "the-artisan-6249b",
    storageBucket: "the-artisan-6249b.appspot.com",
    messagingSenderId: "115804486190",
    appId: "1:115804486190:web:53dbace56641daaf397dbf",
    measurementId: "G-X9LSC6MK8D"
  };
  // Initialize Firebase
  
  //const fire = app.initializeApp(firebaseConfig);
  //firebase.analytics();


  export const app = initializeApp(firebaseConfig);