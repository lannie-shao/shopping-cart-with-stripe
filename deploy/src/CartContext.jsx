import {createContext,useState} from 'react'
import {getProduct} from './products'

export const CartContext=createContext({
    item:[],
    addOneToCart:()=>{},
    deleteFromCart:()=>{},
    removeOneFromCart:()=>{},
    getItemQuantity:()=>{},
    getTotalPrice:()=>{}
})

const CartProvider=({children})=>{
    const [products, setProducts] = useState([])

    const getItemQuantity=(id)=>{
        const quantity=products.find(p=>p.id===id)?.quantity
        return (quantity ? quantity:0)
    }

    const addOneToCart=(id)=>{
        const quantity=getItemQuantity(id)
        if(quantity===0){
            setProducts([...products,{id:id,quantity:1}])
        }else{
            setProducts(products.map(product=>
                product.id===id? 
                {...product, quantity:product.quantity+1}:
                {...product}
            ))
        }

        
    }

    const deleteFromCart=(id)=>{
        const product=products.filter(p=>p.id!==id)
        setProducts(product)
    }

    const removeOneFromCart=(id)=>{
        const product=products.find(p=>p.id===id);
        if(product.quantity===1){
            deleteFromCart(id)
        }else{
            setProducts(products.map(product=>
                product.id===id? {...product,quantity:product.quantity-1}
                :{...product}
                ))
        }        
    }

    const getTotalPrice=()=>{
        let total=0;
        products.map(i=>
            total+=i.quantity*getProduct(i.id).price
        )
        return total;
    }
    const contentValue={
        item:products,
        addOneToCart,
        deleteFromCart,
        removeOneFromCart,
        getItemQuantity,
        getTotalPrice
    }
    return(
        <CartContext.Provider value={contentValue}>
        {children}
        </CartContext.Provider>
    )
}

export default CartProvider;