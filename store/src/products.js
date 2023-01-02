const productsArray=[
    {
        id:'1',
        title:'coffee',
        price:4.99
    },
    {
        id:'2',
        title:'milk',
        price:5.99
    },
    {
        id:'3',
        title:'ice-cream',
        price:8.99
    }
]

const getProduct=(id)=>{
    let product=productsArray.find(item=>item.id===id)
    if (!product) alert(`There is no product for the ID: ${id}`)
    return product;
}
export {productsArray,getProduct};