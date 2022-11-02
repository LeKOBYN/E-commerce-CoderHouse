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

export async function getSingleCurso(id){
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


export async function createBuyOrder(orderData){
    const collectionRef=collection(db,"orders");
    let respuesta= await addDoc(collectionRef,orderData);
    return respuesta.id;
}

export async function sendDataToFirebase() {
    const data = [
      {
        title: "Slingfire Blaster",
        img: "https://images-na.ssl-images-amazon.com/images/I/718eX4rPWlL._SX569_.jpg",
        detail: "Nerf Zombie Strike Series Shotgun",
        price: 2300,
        stock: 10,
        category: "Shotgun",
      },
      {
        title: "Air Max 90",
        img: "https://media.revistagq.com/photos/5d8dd9a3e90a3a0008bddd50/master/w_1600%2Cc_limit/052640_01.jpg",
        detail: "Shoes StreaWear Diseñadas Por Horuk",
        price: 27000,
        expired: true,
        offer: "",
        stock: 6,
        category: "zapatillas",
      },
      {
        title: "Retro 4",
        img: "https://images.stockx.com/images/Air-Jordan-4-Retro-University-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1616520672&q=75",
        detail: "Shoes StreaWear Diseñadas Por Ezze",
        price: 30000,
        expired: true,
        offer: "",
        stock: 15,
        category: "zapatillas",
      },
      {
        title: "SB Dunk",
        img: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Parra-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1627326877",
        detail: "Riñonera Diseñada Por Cijhei",
        price: 20000,
        expired: true,
        offer: "",
        stock: 11,
        category: "zapatillas",
      },
      {
        title: "Riñonera Nike",
        img: "https://http2.mlstatic.com/D_NQ_NP_604116-MLA47968346266_102021-W.jpg",
        detail: "Riñonera Diseñada Por Horuk",
        price: 5000,
        expired: true,
        offer: "",
        stock: 20,
        category: "riñoneras",
      },
      {
        title: "Riñonera Kappa",
        img: "https://http2.mlstatic.com/D_NQ_NP_665167-MLA44062308951_112020-O.webp",
        detail: "Riñonera StreaWear Diseñadas Por Ezze",
        price: 2500,
        expired: true,
        offer: "",
        stock: 16,
        category: "riñoneras",
      },
      {
        title: "Riñonera Everlast",
        img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/770/810/products/whatsapp-image-2021-07-21-at-5-07-30-pm1-1e2293467a5e49391716269797805824-640-0.jpeg",
        detail: "Shoes StreaWear Diseñadas Por Veed",
        price: 2600,
        expired: true,
        offer: "",
        stock: 14,
        category: "riñoneras",
      },
    ];
    let itemsColleccionRef = collection(db, "Guns");
    for (let prod of data) {
      let newDoc = await addDoc(itemsColleccionRef, prod);
      console.log("Documento creado:", newDoc.id);
    }
  }
  
export default FirebaseApp;