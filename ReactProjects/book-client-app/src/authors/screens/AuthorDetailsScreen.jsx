import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Loading from '../../utils/components/Loading'
import NotFound from '../../utils/components/NotFound';


const AuthorDetailsScreen=()=>{

    const {id}= useParams();
    const {selectedAuthor, getAuthorById} = {};
    const {getStatus} = {};


    useEffect(()=>{
        getAuthorById(id);
    },[id])    
  
   
    return (
        <div className="author-details-screen">
            <h1>{selectedAuthor.name}</h1>   
            <div className="row">
                <div className="col col-4">
                    <img src ={selectedAuthor.photo}/>
                </div>
                <div className="col col-8">
                    <h2>Biography</h2>
                    <p>{selectedAuthor.biography}</p>
                </div>
            </div>         
        </div>
    )
}

export default AuthorDetailsScreen;