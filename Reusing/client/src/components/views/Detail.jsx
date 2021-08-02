 import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ButtonD from '../ButtonD';


const Detail = (props) => {
    const [product,setproduct]=useState({});
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/" +props.id)
        .then(res=>setproduct(res.data.product))
    },[])

    
    return (
        <div>
           <h1>You are viewing one product</h1>
          <p>{product.title}</p>
          {/* <p><button onClick={deleteProduct}>delete</button></p> */}
         
          <Link to ={"/products/edit/"+props.id}>Edit Product</Link>  
         
        </div>
    )
}

export default Detail
