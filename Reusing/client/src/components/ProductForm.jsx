import React,{useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';

import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
const styles = {
    paper: {
        width: "20rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}
const ProductForm = (props) => {
    const {onSubmitProp,initialtitle,initialprice ,initialdescription}=props;
    const[title,setTitle]=useState(initialtitle);
    const [price,setPrice]=useState(initialprice);
    const [description,setDescription]=useState(initialdescription);
    const [titleError,setTitleError]=useState("");
    const [priceError,setPriceError]=useState("");
    const [descriptionError,setDescriptionError]=useState("");
    const [submitError,setsubmitError]=useState("");


   const titleerrorMsg={
       empty:"This field must not be Empty",
       minlength:"The minimum characters allwoed is 2"
   }

   const descriptionMsg={
       empty:"Description must not be Empty",
       minlength:"the minimum characters allowed is 2"
   }
   const priceErrorMsg={
       empty:"This field must not be Empty",
       minprice:"Price must be 1$ at Least",
       maxPrice:"Price must be 100$ at Most"
   }

   const titleValidation=(value)=>{
    setTitle(value);
    if(value.length < 1  && value.length!==0){
        setTitleError(priceErrorMsg.empty);
        return false;
    }
    else if (value.length < 2  && value.length!==0){
        setTitleError(titleerrorMsg.minlength);
        return false;
    }
    else {
        setTitleError("");
        return true;
    }
   };

  const descriptionValidation=(value)=>{
       setDescription(value);
       if (value.length<1  && value.length!==0){
           setDescriptionError(descriptionMsg.empty);
           return false;
       }
       else if(value.length<2 && value.length !== 0){
           setDescriptionError(descriptionMsg.minlength);
           return false;
       }
       else {
           setDescriptionError("");
           return true;
       }
  };

  const priceValidation=(value)=>{
      setPrice(value);
      if(value.length <1 && value!==0){
          setPriceError(priceErrorMsg.empty);
          return false;
      }
      else if(!isNaN(value)&& parseInt(value)<1){
          setPriceError(priceErrorMsg.minprice);
          return false;
      }
      else if (!isNaN(value)&& parseInt(value)>100){
          setPriceError(priceErrorMsg.maxPrice);
          return false;
      }
      else {
          setPriceError("");
          return true;
      }
      
  }

  const submitErrMsg={
    noSubmit:"Your Submition is not allowed befor correcting the form"
  }

    const handelSubmit=(e)=>{
        e.preventDefault();
       if(titleValidation(title)&&priceValidation(price)&&descriptionValidation(description)){

     
         
          onSubmitProp({title, price,description});
          setTitle("");
          setPrice(1);
          setDescription("");
          navigate("/AllProducts");
      
}
else{
    setsubmitError(submitErrMsg.noSubmit);
}
    };


    return (
        <div>
            <Paper elevation={3} style={styles.paper}>
            <h2>Product Manager Form</h2>
            <p> <Link to="/AllProducts"> All Products</Link> </p>
            <form onSubmit={handelSubmit}>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Title:</InputLabel>
                    <OutlinedInput type="text" onChange={(e)=>{titleValidation(e.target.value)}} value={title}/>
                    {
                   titleError&&
                   <p style={{color:"red"}}>{titleError}</p>
               }
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Price :</InputLabel>
                    <OutlinedInput type="number" onChange={(e)=>{priceValidation(e.target.value)}} value={price}/>
                    {
                   priceError&&
                   <p style={{color:"red"}}>{priceError}</p>
               }
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Description :</InputLabel>
                    <OutlinedInput type="text"  onChange={(e)=>{ descriptionValidation(e.target.value)}}value={description}/>
                    {
                    descriptionError &&
                    <p style={{color:"red"}}> {descriptionError}</p>
                }
                </FormControl>
                
                <Button type="submit" variant="contained" color="primary">
                Create Product
                </Button>
                {
              submitError &&
              <p style={{color:"red"}}>{submitError}</p>
          }
            </form>
        </Paper> 
        </div>
    )
}

export default ProductForm
