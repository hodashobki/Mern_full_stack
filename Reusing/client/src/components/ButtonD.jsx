import React from 'react'
import axios from 'axios';

const ButtonD = (props) => {
    // axios.delete("http://localhost:8000/api/products/delete/" +props.id)
    // .then(res => navigate("/hoda"))
    // .catch(err => console.log("-E- " + err))
    const { productId, successCallback } = props;
    const deleteProduct = e => {
        axios.delete("http://localhost:8000/api/products/delete/" +productId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <div>
          <button onClick={deleteProduct}>Delete</button>
            
        </div>
    )
}

export default ButtonD
