import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ProductForm from './ProductForm';
import ButtonD from './ButtonD';

const EditProduct = (props) => {

    const { id } = props;
    const [product,setProduct]=useState("");
  

    
    useEffect(()=>{
        
        console.log(props.id)
        axios.get("http://localhost:8000/api/products/" +id)
        .then(res=>{
            console.log(res);
            setProduct(res.data); 
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
            <ButtonD  productId={id} successCallback={()=> navigate("/AllProducts")}/>
        </div>
    )
}

export default EditProduct
