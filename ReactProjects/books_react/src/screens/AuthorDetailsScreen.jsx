import { useParams,useNavigate } from "react-router-dom";
import authorService from "../services/HttpAuthorService";
import NotFoundScreen from "./NotFoundScreen";
import { useState,useEffect } from "react";
import Loading from "../components/Loading";
import ErrorView from "../components/ErrorView";
const AuthodDetailsScreen=()=>{
    
    
    let {id}=useParams();
    let navigator=useNavigate();
    let [author,setAuthor] = useState(null);
    let [status,setStatus] =useState("loading");
    let [error,setError] = useState(null);
    
    useEffect(()=>{
        setStatus('loading');
        authorService
            .getAuthorById(id)
            .then(author=>{
                setAuthor(author);
                setStatus('success');
                setError(null);
            })
            .catch(error=>{
                setError(error);
                setAuthor(null);
                setStatus('error');
            })

    },[id,navigator])


    //let author= authorService.getAuthorById(id);
   
    if(status==='loading')
        return <Loading/>

    if(status==='error'){
        return <ErrorView error={error}  />
    }

    
    if(!author)
        return null; //will not happen. but avoids unnecessary error below

    
    return (<div>
        <h2 data-testid='author-name'>{author.name}</h2>
        <img src={author.photo} alt={author.name}/>
        <button className='btn btn-default'
            onClick={()=>navigator('/authors')}
        >Back to Author List</button>
    </div>)
}

export default AuthodDetailsScreen;