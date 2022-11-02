import React,{useEffect,useState} from 'react'
import styled from "styled-components";
import { getSingleCurso } from "../../services/firebase";
import CardDetail from './ItemDetail';
import {useParams} from 'react-router-dom';


export default function ItemDetailContainer(props) {
const [item,setItem]=useState([]);


const {id}=useParams();

    useEffect(()=>{
        getSingleCurso(id).then((data)=>{
            setItem(data);
        })
    },[id]);

    return (
        <>
            <>
                <CardDetail title={item.title} img={item.img} price={item.price} detail={item.detail} stock={item.stock}/> 
                {/*<ItemCount stock={item.stock}/>*/} 
            </>
        </>
      )
}
