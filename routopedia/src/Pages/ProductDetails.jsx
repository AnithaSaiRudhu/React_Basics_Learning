import React from 'react'
import { useParams } from 'react-router-dom'



const ProductDetails = () => {
    const {prodID} = useParams();
  return (
    <div>
      <h4>Product Details</h4>
      <p>ID : {prodID}</p>
    </div>
  )
}

export default ProductDetails
