import {useState,useEffect} from 'react'
import { useAuthorContext } from '../contexts/AuthorContext';
import {useParams} from 'react-router-dom'


const AuthorDetailsScreen=()=>{

    const {id}= useParams();
    
   
    return (
        <div className="author-details-screen">
            <h1>About Author: {id}</h1>            
        </div>
    )
}

export default AuthorDetailsScreen;