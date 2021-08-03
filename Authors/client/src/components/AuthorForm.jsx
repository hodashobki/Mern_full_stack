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
        width: "40rem", padding: "1rem",display:"flex",justifyContent:"center",alignItems:"center"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}

const AuthorForm = (props) => {
    const {onSubmitProp,initialName}=props;
    const [name,setName]=useState(initialName);
    const [nameError,setnameError]=useState("");
    const [submitError,setsubmitError]=useState("");
    const nameErrorMsg={
        empty:"The Name field must not be Empty",
        minlength:"The minimum characters allwoed is 3"
    }

    const nameValidation=(value)=>{
        setName(value);
        if(value.length < 1  && value.length!==0){
            setnameError(nameErrorMsg.empty);
            return false;
        }
        else if (value.length < 3  && value.length!==0){
            setnameError(nameErrorMsg.minlength);
            return false;
        }
        else {
            setnameError("");
            return true;
        }
       };
    //    submit Error
    const submitErrMsg={
        noSubmit:"Your Submition is not allowed befor correcting the form"
      }
// Handel Submit
    const handelSubmit=(e)=>{
        e.preventDefault();
       if(nameValidation(name)){

          onSubmitProp({name});
          setName("");
          navigate("/");
}
else{
    setsubmitError(submitErrMsg.noSubmit);
}
    };

    return (
        <div>
{/* <form onSubmit={handelSubmit}>
    <p>
        <label>Author Name: 
            <input type="text" onChange={(e)=>{nameValidation(e.target.value) }}  value ={name}/>

    
        </label>
        <button type="submit ">Add Author</button>
        <button type="submit" onClick={()=>navigate("/")}>Cancle</button>
    </p>

</form> */}
            <center>
           <Paper elevation={3} style={styles.paper}>
            <form onSubmit={handelSubmit}>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Author Name</InputLabel>
                    <OutlinedInput type="text"  onChange={(e)=>{nameValidation(e.target.value) }}  value ={name}/>
               {
                   nameError&&
                   <p style={{color:"red"}}>{nameError}</p>
               }
                </FormControl>
               <span></span>
                <Button type="submit" variant="contained" color="primary" style={{marginLeft: "10px"}}>
                    Add
                </Button>
               
                <Button type="submit" variant="contained" color="primary" onClick={()=>navigate("/")}>
                    Cancel
                </Button>
                {
              submitError &&
              <p style={{color:"red"}}>{submitError}</p>
          }
            </form>
        </Paper> 
        </center>

        </div>
    )
}

export default AuthorForm
