import app from 'firebase/compat/app';
import 'firebase/compat/auth'


const firebaseConfig = {
  apiKey: "AIzaSyA-Ep05PiByx3tf5wP4r_3OQad_pRVA7pY",
  authDomain: "catrac-cdc6e.firebaseapp.com",
  databaseURL: "https://catrac-cdc6e-default-rtdb.firebaseio.com",
  projectId: "catrac-cdc6e",
  storageBucket: "catrac-cdc6e.appspot.com",
  messagingSenderId: "429295578957",
  appId: "1:429295578957:web:620e1e172d671b68f31104",
    hosting: {
        "site": "garrison2005",
        "public": "public",
        
      }
  };
  // Initialize Firebase
  
  //const fire = app.initializeApp(firebaseConfig);
  //firebase.analytics();

  class fireMain {
        constructor(){
            app.initializeApp(firebaseConfig);
            this.auth = app.auth;
        }


        register(){
           
        }

        login(email, password){
            return this.auth.signInWithEmailAndPassword(email, password);
        }

        createAccount(email, password){
            return this.auth.createUserWithEmailAndPassword(email, password);
        }

        logout(){
            return this.auth.signOut();
        }

        getUserId(){
            return this.auth.currentUser.uid
        }
  }


  export default new  fireMain();