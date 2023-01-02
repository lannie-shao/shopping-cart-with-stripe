import React,{useState,useContext} from 'react'
import styled from 'styled-components'
import { CartContext } from '../CartContext'
import {Cart} from './Cart'

const DIV=styled.div`
    padding:20px 50px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const LOGO=styled.h1`
    color:rgba(0, 188, 212, 1);
    font-weight:700;
    margin:0;
`
const BUTTON=styled.button`
    background-color:lightblue;
    border:none;
    border-radius:4px;
    padding:5px 10px;
    font-size:18px;
    color:gray;
    font-weight:600;
    cursor:pointer;
`
const CART=styled.div`
  position:absolute;
  top:70px;
  right:30px;
`
export const Navbar = () => {
  const [toggle,setToggle]=useState(false)
  const cartData=useContext(CartContext)
  const totalItems=cartData.item.reduce((sum)=>sum+1,0)
  return (
    <DIV>
    <LOGO>Lannie Store</LOGO>
    <BUTTON onClick={()=>setToggle(true)}>Cart {totalItems} Items</BUTTON>
    <CART>
      {toggle? <Cart setToggle={setToggle}/> : '' }
    </CART>
    </DIV>
  )
}
