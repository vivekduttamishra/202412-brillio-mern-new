import AuthorDetails from "../components/AuthorDetails";
import AuthorList from "../components/AuthorList";
import { useAuthorContext } from "../contexts/AuthorContext";


const AuthorManageScreen=()=>{

    const {authors,getAllAuthors} = useAuthorContext();


    return (
        <div className="row author-manage-screen">
            <div className="col col-4 author-manage-list">
                {authors.length===0? <button onClick={getAllAuthors} className="btn btn-primary">GetAll Authors</button>:null }
                
                <AuthorList/>
            </div>
            <div className="col col-8 author-manage-details">
                <AuthorDetails/>
            </div>
        </div>
    )
}

export default AuthorManageScreen;