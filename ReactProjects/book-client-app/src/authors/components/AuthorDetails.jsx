import { useAuthorContext } from "../contexts/AuthorContext";


const AuthorDetails = () => {

    let {selectedAuthor,deleteAuthorById} = useAuthorContext();

    if(selectedAuthor===null)
        return <h3>No Authors Selected</h3>;


    return (<div className="author-details-screen">
        <h1>{selectedAuthor.name}</h1>
        <div className="row">
            <div className="col col-4">
                <img src={selectedAuthor.photo} />
                <button onClick={()=>deleteAuthorById(selectedAuthor.id)} className='btn btn-danger'>Remove Author</button>
            </div>
            <div className="col col-8">
                <h2>Biography</h2>
                <p>{selectedAuthor.biography}</p>
            </div>
        </div>
    </div>)
}

export default AuthorDetails;