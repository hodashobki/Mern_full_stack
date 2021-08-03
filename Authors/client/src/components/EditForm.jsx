import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';
import AuthorForm from './AuthorForm';

const EditForm = (props) => {
    const {id}=props;
    const [author,setAuthor]=useState("");

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
        .then(res=>{
            setAuthor(res.data.authors)
        })
    },[author])

    const editAuthor=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:8000/api/authors/update/"+id,author)
        .then(res=>navigate("/"));
    }
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/">Home</Link>
            <h3>Edit Author</h3>
           <AuthorForm 
      onSubmitProp={editAuthor}
      initialName={author.name}
           /> 
        </div>
    )
}

export default EditForm
