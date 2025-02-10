import { useState, useEffect } from 'react'
import { useAuthorContext } from '../contexts/AuthorContext';



const AuthorListScreen = () => {

    const { authors, getAllAuthors } = useAuthorContext();
    useEffect(() => {
        getAllAuthors();
    }, [])

    if (authors === null) {
        return (<div>
            <h2>Failed to Load Author</h2>
            <button className='btn btn-primary' onClick={getAllAuthors}>Retry</button>
        </div>)
    }

    if (authors && authors.length === 0)
        return <h2>Loading...</h2>

    

    
    return (
        <div className="author-list-screen">
            <h1>Author List</h1>
            <div className="row">
                {
                    authors.map(author => (
                        <div  className=" author-card card col col-12 col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xs-12" 
                                key={author.id}  >
                            <img src={author.photo} className="card-img-top" alt={author.name}/>
                                <div className="card-body">
                                    <h5 className="card-title">{author.name}</h5>
                                    <p className="card-text">{author.biography?.substring(0,50)}</p>
                                    <a href={`/authors/${author.id}`} className="btn btn-primary">Details</a>
                                </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AuthorListScreen;