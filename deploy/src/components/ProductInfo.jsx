import {useContext} from 'react'
import styled from 'styled-components'
import { CartContext } from '../CartContext'
import { getProduct} from '../products'

const Div=styled.div`
    display:flex;
    flex-direction:column;
`
const TITLE=styled.h3`
    color:rgba(103, 58, 183, 1);
    font-weight:600;
    margin:0;
    margin-bottom:5px;
`
const Span=styled.span`
    display:flex;
    justify-content:space-between;
`
const Quantity=styled.p`
    font-size:14px;
    margin:0;
`
const Total=styled.p`
    font-size:14px;
    margin:0;
    margin-bottom:5px;
`
const Button=styled.button`
    width:80px; 
    background-color:#f15032;
    border:none;
    border-radius:4px;
    padding:5px;
    font-size:10px;
    color:white;
    font-weight:600;
    cursor:pointer;
`
const Hr=styled.hr`
    color:lightgray;
    height:0.3px;
    width:190px;
`
const ProductInfo = ({props}) => {
    const cartData=useContext(CartContext);
    const id=props.id;
    let quantity=props.quantity;
    let product=getProduct(id);    
    let price=product.price;
  return (       
        <Div>  
          <TITLE>{product.title}</TITLE>
          <Span>
          <Quantity>{quantity} total</Quantity>
          <Total>$ {price*quantity.toFixed(2)}</Total>
          </Span>
          <Button onClick={()=>cartData.deleteFromCart(product.id)}>Remove</Button>
          <Hr></Hr>
        </Div>      
)
}
export default ProductInfo