import { useState } from 'react';
import authorService from '../services/AuthorService';
import { Link } from 'react-router-dom';

const AuthorListScreen = ()=>{

    const [selectedAuthor,selectAuthor] = useState(null);

    //getAllAuthors is a sync function here
    //it is ok to call a sync function because 
    //next line will not work till we got the details
    //it is a single rendering
    //this approach will not work for an async function
    let authors =  authorService.getAllAuthors()//.filter((a,i)=>i<2);

   

    return (
        <div className="AuthorListScreen">
            <h1>Author List</h1>

            {selectedAuthor && <h4>Selected Author: {selectedAuthor.name}</h4>}
            <div className="author-list">
                {authors.map(author=>(
                    <div className="author-card" data-testid='author-card' key={author.id}>
                        <img src={author.photo} alt={author.name} />
                        <h3>{author.name}</h3>
                        <Link className='btn btn-primary' to={`/authors/${author.id}`}>Details</Link>
                    </div>
                ))}    
            </div>

        </div>
    )
}



export default AuthorListScreen;