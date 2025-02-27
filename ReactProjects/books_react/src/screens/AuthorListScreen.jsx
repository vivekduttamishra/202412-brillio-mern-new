import authorService from '../services/AuthorService';

const AuthorListScreen = ()=>{

    let authors =  authorService.getAllAuthors();

    return (
        <div className="AuthorListScreen">
            <h1>Author List</h1>

            <div className="author-list">
                {authors.map(author=>(
                    <div className="author-card" key={author.id}>
                        <img src={author.photo} alt={author.name} />
                        <h3>{author.name}</h3>
                        <button>Details</button>
                    </div>
                ))}    
            </div>

        </div>
    )
}



export default AuthorListScreen;