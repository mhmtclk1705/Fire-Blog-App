import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { useEffect, useState } from "react";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getDatabase(app);

// export const signup = (email, password) => {
//   return createUserWithEmailAndPassword(auth, email, password);
// };

// export const login = (email, password) => {
//   return signInWithEmailAndPassword(auth, email, password);
// };

// export const logout = () => {
//   return signOut(auth);
// };

// export const loginWithGoogle = () => {
//   googleProvider.setCustomParameters({ prompt: "select_account" });
//   signInWithPopup(auth, googleProvider)
//     .then((result) => {})
//     .catch((error) => {
//       console.log(error);
//     });
// };

// export const userObserver = (setCurrentUser) => {
//     onAuthStateChanged(auth,(currentUser) => {
//         if(currentUser){
//         setCurrentUser(currentUser);
//         }
//         else{
//             setCurrentUser(false);
//         }
//     });
//     }

// export const addBlog = (posts) => {
//   const db = getDatabase(app);
//   const blogRef = ref(db,"blogs");
//   const newBlogRef = push(blogRef);
//   set((newBlogRef),{
//     title: posts.title,
//     imgUrl: posts.imgUrl,
//     content: posts.content,
//     user: posts.user,
//     addDate: posts.addDate,
//     likeCount: posts.likeCount,
//     commentCount: posts.commentCount,
//   });

// }

// export const useFetch = () => {
//  const [blog, setBlog] = useState();

//  useEffect(() => {
//   const db = getDatabase(app);
//   const blogRef = ref(db, "blogs");
//   onValue(blogRef,(snapshot) => {
//     const data = snapshot.val();
//     const blogArray = []
//     for(let id in data){
//       blogArray.push({
//         id,
//         ...data[id]
//       })
//     }
//     setBlog(blogArray);
//   })
// })
// }
