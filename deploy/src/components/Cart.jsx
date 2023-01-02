import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {GiTireIronCross} from 'react-icons/gi'
import { CartContext } from '../CartContext'
import ProductInfo from './ProductInfo'

const DIV=styled.div`
    background: linear-gradient(230deg, rgba(159,159,233,1) 0%, rgba(255,255,255,1) 49%, rgba(156,80,156,1) 100%);
    width:200px;
    padding:15px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    z-index:5;
    border:1px solid gray;
    border-radius:4px;
    box-shadow: 5px 5px 9px -3px rgba(34,34,34,0.69);
	-webkit-animation: slide-in-right .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: slide-in-right .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
`
const Close=styled.div`
    width:35px;
    height:35px;
    border-radius:50%;
    background-color:lightgray;
    border:none;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
`
const TITLE=styled.h3`
    color:rgba(103, 58, 183, 1);
    font-weight:600;
`
const SPAN=styled.div`
    height:0.5px;
    width:190px;
    background-color:gray;
    border:none;
`
const Price=styled.p`
    font-size:${props=>props.type==='total'? '20px':'16px'};
`
const Span=styled.span`
  display:flex;
  gap:15px;
`
const Button=styled.button`
    background-color:lightblue;
    border:none;
    border-radius:4px;
    padding:5px 10px;
    font-size:16px;
    color:gray;
    font-weight:600;
    cursor:pointer;
    margin-bottom:5px;
`
export const Cart = ({setToggle}) => {
  const cartData=useContext(CartContext)
  
    const handleClick=()=>{

    }
  return (
    <DIV>
        <Close onClick={()=>setToggle(false)}><GiTireIronCross style={{color:'white',fontSize:'18px'}}/></Close>
        <TITLE>Your Shopping Cart:</TITLE>
        <SPAN></SPAN>
        <Price>Items in your cart:</Price>
        {cartData.item.map((product,index)=>
         <ProductInfo key={index} props={product}/>)
        }
        <Price type='total'>Total Price is: ${cartData.getTotalPrice().toFixed(2)}</Price>
        <Span>
        <Button onClick={handleClick}>Checkout</Button>
        <Button onClick={<Link to='cancel'/>}>Cancel</Button>
        </Span>
    </DIV>
  )
}