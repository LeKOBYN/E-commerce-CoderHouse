import { initializeApp } from "firebase/app";
import { 
    addDoc,
    getFirestore,
    collection,
    getDocs,
    getDoc,
    doc,
    query,
    where
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDHURPbSTEIXY0QgXTDsUiRqvpIa0ikBX4",
    authDomain: "e-commerce-kevin-caceres.firebaseapp.com",
    projectId: "e-commerce-kevin-caceres",
    storageBucket: "e-commerce-kevin-caceres.appspot.com",
    messagingSenderId: "34427816128",
    appId: "1:34427816128:web:536f1210abb12f9827c525"
  };

const FirebaseApp = initializeApp(firebaseConfig);
const db=getFirestore(FirebaseApp)

export async function getItem(){
    const collectionRef=collection(db,"Guns");
    let results=await getDocs(collectionRef);

    let dataCursos= results.docs?.map(doc=>{
        return {
            id:doc.id,
            ...doc.data()
        };
    })
    return dataCursos;
}

export async function getSingleItem(id){
const docRef=doc(db,"Guns",id);
const docResult= await getDoc(docRef);
if(docResult.exists()){
   return {
    id:docResult.id,
    ...docResult.data()
    }; 
}
};

export async function getItemByCategory(categoryID){
const collectionRef=collection(db,"Guns");
const queryCat=query(collectionRef,where("category","==",categoryID));
let result= await getDocs(queryCat);

let dataCursos=result.docs.map(doc => {
    return{
        id:doc.id,
        ...doc.data()
    }
})
return dataCursos;
}

export async function getOrderData(idParams) {
    const docRef = doc(db, "orders", idParams);
    const docResult = await getDoc(docRef);
    if (docResult.exists()) {
      return { id: docResult.id, ...docResult.data() };
    }
  }

export async function createBuyOrder(orderData){
    const collectionRef=collection(db,"orders");
    let respuesta= await addDoc(collectionRef,orderData);
    return respuesta.id;
};

export default FirebaseApp;