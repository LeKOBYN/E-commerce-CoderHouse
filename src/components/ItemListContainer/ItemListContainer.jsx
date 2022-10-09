import React,{useEffect,useState} from 'react'
//import styled from 'styled-components'
import ItemList from './ItemList';
import {useParams} from 'react-router-dom'
import { getCursos,getCursosByCategory } from '../../mockAPI/mockAPI';

export default function ItemListContainer(props) {
  const [coursesList, setCoursesList] = useState()
  const {categoryID}=useParams();

  useEffect(() => {
    if (categoryID === undefined) {
        getCursos().then(
        (data)=>{
            setCoursesList(data);
        }
        )
    }
    else{
        getCursosByCategory(categoryID).then((data)=>{
            setCoursesList(data);
        })
    }
},[categoryID])
    
  return (
    <>
        <ItemList coursesList={coursesList}/>
    </>
  )
}
