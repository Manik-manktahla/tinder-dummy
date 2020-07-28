import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB8EnwcxUnTnXW9JMHw0E2jtrA3Dpa50FE",
  authDomain: "tinder-dummy.firebaseapp.com",
  databaseURL: "https://tinder-dummy.firebaseio.com",
  projectId: "tinder-dummy",
  storageBucket: "tinder-dummy.appspot.com",
  messagingSenderId: "106566071575",
  appId: "1:106566071575:web:310dc0001216f2b085f352",
  measurementId: "G-GBKP86FGD7",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;