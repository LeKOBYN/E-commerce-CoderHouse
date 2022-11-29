import React from 'react';
import {useEffect,useState} from 'react'
import { getSingleItem } from "../../services/firebase";
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';

export default function ItemDetailContainer() {
    const [item,setItem]=useState([]);
    const [feedbackMsg,setFeedbackMsg] = useState(null);
    const {id}=useParams();

    useEffect(()=>{
        getSingleItem(id).then((data)=>{
              setItem(data);
        })
        .catch((error)=>{
          setFeedbackMsg(error.message)
        });
    },[id]);

      return(
        <>
            {feedbackMsg !== null ? (
            <h4>Error {feedbackMsg}</h4>
        ) : (
          <ItemDetail item={item} />
        )}
        </>
      )
      
}

