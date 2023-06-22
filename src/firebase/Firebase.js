// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Required for side-effects
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS7dNZAYmYEJA6GXKcxtioz_KhtCN0AT4",
  authDomain: "wearworx-sakshxm08.firebaseapp.com",
  projectId: "wearworx-sakshxm08",
  storageBucket: "wearworx-sakshxm08.appspot.com",
  messagingSenderId: "939214306183",
  appId: "1:939214306183:web:4bc74908c5d6ef682ef122",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function firebaseTry() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(
      `${doc.id} => ${doc.data().first} ${
        doc.data().last
      } was borned in the year ${doc.data().born}`
    );
  });
}
