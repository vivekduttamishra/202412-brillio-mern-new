import {useState,useEffect} from 'react'
import { useAuthorContext } from '../contexts/AuthorContext';



const AuthorListScreen=()=>{

    const {authors,getAllAuthors} = useAuthorContext();
    useEffect(()=>{
        getAllAuthors();
    },[])


    return (
        <div className="author-list-screen">
            <h1>Author List</h1>
            {
                authors.map(author => (
                    <div key={author.id}>{author.name}</div>
                ))
            }
        </div>
    )
}

export default AuthorListScreen;