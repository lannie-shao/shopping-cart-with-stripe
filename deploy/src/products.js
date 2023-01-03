const productsArray=[
    {
        id:'price_1MLlhnCbivP6a4Xmn0hFmVuC',
        title:'coffee',
        price:4.99
    },
    {
        id:'price_1MLlkJCbivP6a4XmNpc1Qbz4',
        title:'milk',
        price:5.99
    },
    {
        id:'price_1MLllACbivP6a4XmWjx5GGNr',
        title:'ice-cream',
        price:8.99
    },
    {
        id:'price_1MLlluCbivP6a4XmkgZylAHE',
        title:'apple',
        price:6.99
    }
]

const getProduct=(id)=>{
    let product=productsArray.find(item=>item.id===id)
    if (!product) alert(`There is no product for the ID: ${id}`)
    return product;
}
export {productsArray,getProduct};