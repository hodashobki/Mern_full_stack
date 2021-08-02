import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../ProductForm';
const Main = (props) => {
   
    const [products,setProduct]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res=>{
            setProduct(res.data.products)
        })
    },[products])


    const createPerson =product => {
        axios.post("http://localhost:8000/api/products/new",product)
        .then(res=>{
             setProduct([...products,res.data]);
            
           
    })
    
        // .catch(err=>{
        //    const errstr= err.response.data.error.errors.title.message + " or " +
        //     err.response.data.error.errors.price.message + "or "+err.response.data.error.errors.description.message;
        //     setsubmitError(errstr);
        // })
}

    return (
        <div>
         <ProductForm onSubmitProp={createPerson} initialtitle="" initialprice={1} initialdescription=""/>   
        </div>
    )
}

export default Main
