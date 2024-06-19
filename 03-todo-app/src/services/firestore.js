import { initializeApp } from "firebase/app";
// Import SDKs of Firebase projects below here, works similar for any product
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
// Importing Firestore relevant functions

// My project config
const firebaseConfig = {
  apiKey: "AIzaSyAzmnY_Qr_5eb_XmJo_4Qa-3OBSzBMl3Ns",
  authDomain: "todo-app-9f645.firebaseapp.com",
  projectId: "todo-app-9f645",
  storageBucket: "todo-app-9f645.appspot.com",
  messagingSenderId: "633590828023",
  appId: "1:633590828023:web:f9c585c0f1660d8dc6fcf2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const user = "john";
const docRef = doc(db, "tasks", user);

export async function saveTasks(formattedTasks) {
  try {
    await setDoc(docRef, formattedTasks);
    console.log("Saved to DB");
  } catch (e) {
    console.error("Error saving tasks to database: ", e);
  }
  return;
}

export async function getTasks() {
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return docSnapshot.data();
  }

  return null;
}
