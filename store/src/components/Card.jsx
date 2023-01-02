import React,{useContext} from 'react'
import styled from 'styled-components'
import { CartContext } from '../CartContext'

const DIV=styled.div`
    padding:15px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border:1px solid gray;
    border-radius:4px;
    box-shadow: 5px 5px 9px -3px rgba(34,34,34,0.69);
`
const TITLE=styled.h3`
    color:rgba(103, 58, 183, 1);
    font-weight:600;
    margin:5px;
`
const Price=styled.p`
    font-size:16px;
    margin:5px;
`
const Button=styled.button`
    background-color:${props=>props.type==='remove'? '#f15032':'lightblue'};
    border:none;
    border-radius:4px;
    padding:5px 10px;
    font-size:14px;
    color:${props=>props.type==='remove'? 'white':'gray'};
    font-weight:600;
    cursor:pointer;
`
const Div=styled.div`
    display:flex;
    flex-direction:column;
    gap:5px;
`
const ADD=styled.div`
    display:flex;
    gap:10px;
    justify-content:space-around;
    align-items:center;
`
const P=styled.p`
`
const Circle=styled.div`
    height:26px;
    width:26px;
    background-color:lightgray;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    border-radius:50%;
    font-size:22px;
    font-weight:900;
    cursor:pointer;
`
export const Card = ({product}) => {
    const cartData=useContext(CartContext)
    const quantity=cartData.getItemQuantity(product.id)
  return (
    <DIV>
        <TITLE>{product.title}</TITLE>
        <Price>${product.price}</Price>
        {quantity>0?<Div>
            <ADD>
            <P>In Cart {quantity}:</P>
            <Circle onClick={()=>cartData.addOneToCart(product.id)}>+</Circle>
            <Circle onClick={()=>cartData.removeOneFromCart(product.id)}>-</Circle>
            </ADD>
            <Button type='remove' onClick={()=>cartData.deleteFromCart(product.id)}>Remove</Button>
            </Div>
        :<Button onClick={()=>cartData.addOneToCart(product.id)}>Add To Cart</Button>
        }
    </DIV>
  )
}
