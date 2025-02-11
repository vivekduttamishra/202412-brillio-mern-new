import {useState, createContext, useContext } from "react";
import AuthorService from "../services/AuthorService";
import delay from '../../utils/delay';

const authorService = new AuthorService();

const authorContext = createContext();

export const AuthorContext =(props)=>{
    //state and meaning
    // author=== [] =>  not loaded yet.
    // author=== null => error loading
    // authors=== [author1,author2,author3] => success

    const [authors,setAuthors]= useState([]);
    const [selectedAuthor,setSelectedAuthor] = useState(null);

    const getAuthorById= async(id)=>{
        await delay(2000); // simulate a delay for loading the author data.
        try{
            
            let author = await authorService.getById(id);
          //  console.log('selected author', author);
            setSelectedAuthor(author);
        }catch(e){
            setSelectedAuthor(undefined); 
        }
    }
    
    const getAllAuthors= async()=>{
        try{
            setAuthors([]);
            await delay(2000);
            let authors =await authorService.getAll();
            setAuthors(authors);
        }catch(err){
            setAuthors(null); //we will not be getting the author
        }
    }

    let controller={
        //states
        authors,
        selectedAuthor,

        //actions
        getAllAuthors,
        getAuthorById,
    }

    return (
        <authorContext.Provider value={controller}>
            {props.children}
        </authorContext.Provider>
    )
}

export const useAuthorContext = ()=> useContext(authorContext)