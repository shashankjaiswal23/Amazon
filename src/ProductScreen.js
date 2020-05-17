import React from 'react'
import data from './data'

//{console.log(props.match.params)}  == used to fetch url
function ProductScreen(props) {
    console.log(props.match.params.id)
    const product = data.products.find(x=>x._id === props.match.params.id)
    
    return (
        <div>
        <h1>{product.name}</h1>
    <h3></h3>
        </div>
    )
}
export default ProductScreen
