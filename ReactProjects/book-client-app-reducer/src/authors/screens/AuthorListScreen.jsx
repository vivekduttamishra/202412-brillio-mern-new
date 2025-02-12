import { useState, useEffect } from 'react'
import { useAuthorContext,AuthorActions } from '../contexts/AuthorContext';
import Loading from '../../utils/components/Loading';

import {Link} from 'react-router-dom'
import { useStatusContext } from '../../commons/contexts/status-context';
import TitledComponent from '../../utils/components/TitledComponent';
import withBorder from '../../utils/hoc/with-broder';


const AuthorListScreen = () => {

    const { authors, getAllAuthors } = useAuthorContext();
    const {getStatus} = useStatusContext();
    const status = getStatus(AuthorActions.AUTHORS);
    console.log('status of AUTHORS',status);

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
        return <Loading/>

    

    
    return (
        <TitledComponent title="Author List" expandable={true} >
            <div className="author-list-screen">
            
                <div className="row">
                    {
                        authors.map(author => (
                            <div  className=" author-card card col col-12 col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xs-12" 
                                    key={author.id}  >
                                <img src={author.photo} className="card-img-top" alt={author.name}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{author.name}</h5>
                                        <p className="card-text">{author.biography?.substring(0,50)}</p>
                                        
                                        <Link to={`/authors/${author.id}`} className="btn btn-primary">Details</Link>
                                    
                                    
                                    </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </TitledComponent>
    )
}

export default AuthorListScreen;