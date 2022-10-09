import React,{useEffect,useState} from 'react'
import styled from "styled-components";
import { getSingleCurso } from "../../mockAPI/mockAPI";
import ItemCount from '../ItemCount/ItemCount';
import CardDetail from './CardDetail';
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
            <ContainerCardDetail>
                <CardDetail title={item.title} img={item.img} price={item.price} detail={item.detail}/> 
                <ItemCount stock={item.stock}/>
            </ContainerCardDetail>
        </>
      )
}
const ContainerCardDetail=styled.div`
width: 60%;
height: 600px;
background-color: #832f2f;
display:flex;
justify-content: center;
align-items: center;
margin: auto;
margin-top: 5rem;
`