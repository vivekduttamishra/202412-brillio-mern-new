import { useParams,useNavigate } from "react-router-dom";
import authorService from "../services/AuthorService";
import NotFoundScreen from "./NotFoundScreen";

const AuthodDetailsScreen=()=>{
    let {id}=useParams();
    let navigator=useNavigate();
    let author= authorService.getAuthorById(id);
    if(!author)
        return <NotFoundScreen/>

    
    return (<div>
        <h2>{author.name}</h2>
        <img src={author.photo} alt={author.name}/>
        <button className='btn btn-default'
            onClick={()=>navigator('/authors')}
        >Back to Author List</button>
    </div>)
}

export default AuthodDetailsScreen;