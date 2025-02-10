import {useState,useEffect} from 'react'
import { useAuthorContext } from '../contexts/AuthorContext';



const AuthorListScreen=()=>{

    const {authors,getAllAuthors} = useAuthorContext();
    useEffect(()=>{
        getAllAuthors();
    },[])

    if(authors===null){
        return (<div>
            <h2>Failed to Load Author</h2>
            <button className='btn btn-primary' onClick={getAllAuthors}>Retry</button>
        </div>)
    }

    if(authors && authors.length===0)
        return <h2>Loading...</h2>



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