import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router'
import axios from 'axios';
import DeleteButton from './DeleteButton';

const MainPage = (props) => {

    const [author,setAuthor]=useState([]);
    
    useEffect(()=>{
        axios.get("http:localhost:8000/api/authors")
        .then(res=>{
            setAuthor(res.data.authors)
        })
    },[author]);


    // delete from the Dom
    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id != authorId))
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <nav>
                <Link to="/form">Add an Author</Link>
            </nav>
            <h3>We have quotes by: </h3>

            <table>
  <tr>
    <th>Author</th>
    <th>Actions Available</th>
  </tr>
  {author.map((auth)=>{
    return(
        <tr key={auth._id}>
        <td>{auth.name}</td>
        <td>
      
            link|<DeleteButton  authorId={auth._id} successCallback={()=>removeFromDom(auth._id)}/>
        </td>
    </tr>
    );
  })}
  </table>
        </div>
    )
}

export default MainPage
