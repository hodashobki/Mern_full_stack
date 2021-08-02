import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ProductForm from './ProductForm';

const EditProduct = (props) => {

    const { id } = props;
    const [product,setProduct]=useState("");
  

    
    useEffect(()=>{
        
        console.log(props.id)
        axios.get("http://localhost:8000/api/products/" +id)
        .then(res=>{
            console.log(res);
            setProduct(res.data);
            // setTitle(res.data.product.title);
            // setPrice(res.data.product.price);
            // setDescription(res.data.product.description);   
        })
      
    },[])
    
    
const editProduct=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:8000/api/products/update/"+id ,product)
        .then(res=>navigate("/AllProducts"));
}

    return (
        <div>
            <ProductForm onSubmitProp={editProduct}
             initialtitle={product.title}
             initialprice={product.price}
              initialdescription={product.description} />
        </div>
    )
}

export default EditProduct
