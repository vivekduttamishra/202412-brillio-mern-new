import { useState,useEffect } from 'react';
import authorService from '../services/HttpAuthorService';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import ErrorView from '../components/ErrorView';

const AuthorListScreen = ()=>{

    //let authors =  authorService.getAllAuthors()//.filter((a,i)=>i<2);
    const [authors, setAuthors] =useState('');
    const [status, setStatus] = useState('loading');
    const [error, setError] = useState(null);

    useEffect(()=>{
        authorService.getAllAuthors()
        .then(data=>{
            setAuthors(data);
            setStatus('success');
            setError(null)
        })
        .catch(err=>{
            console.error('Error fetching authors',err);
            setStatus('error');
            setError(err);
        })
        setError(null);
    },[]);

    if(status==='loading'){
        return <Loading/>
    }

    if(status==='error'){
        return <ErrorView error={error}/>
    }
   
    if(status!=='success'){
        return <ErrorView message="Unknown Status"/>
    }

    return (
        <div className="AuthorListScreen">
            <h1>Author List</h1>

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