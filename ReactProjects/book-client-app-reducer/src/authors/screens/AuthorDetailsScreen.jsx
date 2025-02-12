import {useState,useEffect} from 'react'
import { AuthorActions, useAuthorContext } from '../contexts/AuthorContext';
import {useParams} from 'react-router-dom'
import Loading from '../../utils/components/Loading'
import NotFound from '../../utils/components/NotFound';
import { useStatusContext } from '../../commons/contexts/status-context';


const AuthorDetailsScreen=()=>{

    const {id}= useParams();
    const {selectedAuthor, getAuthorById} = useAuthorContext();
    const {getStatus} = useStatusContext();

    const status= getStatus(AuthorActions.AUTHOR_SELECT)
    console.log('status of get author by id', id, status);

    useEffect(()=>{
        getAuthorById(id);
    },[id])
    
    if(status.status==="pending")
        return ;

    if(status.status==='executing')
        return <Loading/>

    if(status.status==='error')
        return <NotFound message={`Invalid Author Id: ${id}`}/>
    
   
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