import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router'
import AuthorForm from './AuthorForm';

const DisplayFormPage = (props) => {

    const [authors,setAuthor]=useState([]);
    
    useEffect(()=>{
        axios.get("http:localhost:8000/api/authors")
        .then(res=>{
            setAuthor(res.data.authors)
        })
    },[authors]);
   
    const creatAuthor=auth=>{
        axios.post("http://localhost:8000/api/authors/new",auth)
        .then(res=>{
            setAuthor([...authors,res.data]);
        })
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/">Home</Link>
            <h3>Add A New Author</h3>
            <AuthorForm  onSubmitProp={creatAuthor} initialName=""/>
        </div>
    )
}

export default DisplayFormPage
