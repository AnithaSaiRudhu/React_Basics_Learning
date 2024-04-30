import { Link, useNavigate , Navigate } from 'react-router-dom';
import React, { useState } from 'react'

const Product = () => {

  const navigate = useNavigate();
  const[gotoProd, setGotoProduct] = useState(()=> {
    return false;
  });
  return (
    <div>Product
    <button onClick={()=>{
        navigate("/product/createproduct");
    }}>
      Add Product  
    </button>
    <Link to = {`/product/productdetails/6`}>
    <button>
      Product Details
    </button>
    </Link>
    {
        gotoProd && <Navigate to= "/product/productdetails/9"></Navigate>
    }

    <button onClick={()=>{
        setGotoProduct ({gotoProd:true});
    }}>
            Product Details - 9 (USE STATE)
    </button>
    </div>
  )
}

export default Product
