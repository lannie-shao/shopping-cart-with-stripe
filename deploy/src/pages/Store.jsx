import React from 'react'
import {productsArray} from '../products'
import styled from 'styled-components'
import {Card} from '../components/Card'

const DIV=styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const HEAD=styled.h1`
    color:rgba(156, 39, 176, 1);
`
const CARD=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    gap:20px;
`
const Store = () => {
  return (
    <DIV>
        <HEAD>WELCOME TO THE STORE</HEAD>
        <CARD>
        {productsArray.map((product)=>(
            <Card key={product.id} product={product}/>
        ))}
        </CARD>
    </DIV>
  )
}

export default Store