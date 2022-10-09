//import React from 'react'
import styled from "styled-components"
import Card from "../Card/Card"

export default function ItemList(props) {
  return (
    <>
        <FlexWrapper>
            {
                props.coursesList?.map((item)=>{
                    return(
                        <Card
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        price={item.price}
                        detail={item.detail}
                        />
                    )
                })
            }
        </FlexWrapper>
    </>
  )
}

const FlexWrapper=styled.div`
    display: flex;
    justify-content: space-between;
    margin:3rem auto;
    width: 80%;
    flex-wrap: wrap;
    
`
