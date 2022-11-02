import React,{useEffect,useState} from 'react'
//import styled from 'styled-components'
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import {getItem, getItemByCategory} from "../../services/firebase";
import Loader from '../loader/Loader';
//import { getCursos,getCursosByCategory } from '../../mockAPI/mockAPI';

export default function ItemListContainer(props) {
  const [coursesList, setItemList] = useState()
  const {categoryID}=useParams();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (categoryID === undefined) {
        getItem().then(
        (data)=>{
            setItemList(data);
            setIsLoading(false)
        }
        )
    }
    else{
        getItemByCategory(categoryID).then((data)=>{
            setItemList(data);
        })
    }
},[categoryID])
    
  return (
    <div>{
          isLoading ? <Loader/>:<ItemList coursesList={coursesList}/>
      }
    </div>
  )
}
