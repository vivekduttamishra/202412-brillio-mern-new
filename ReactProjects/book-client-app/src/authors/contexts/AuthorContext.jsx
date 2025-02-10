import {useState, createContext, useContext } from "react";
import AuthorService from "../services/AuthorService";

const authorService = new AuthorService();

const authorContext = createContext();

export const AuthorContext =(props)=>{
    //state and meaning
    // author=== [] =>  not loaded yet.
    // author=== null => error loading
    // authors=== [author1,author2,author3] => success

    const [authors,setAuthors]= useState([]);
    
    const getAllAuthors= async()=>{
        try{
            setAuthors([]);
            let authors =await authorService.getAll();
            setAuthors(authors);
        }catch(err){
            setAuthors(null); //we will not be getting the author
        }
    }

    let controller={
        authors,
        getAllAuthors
    }

    return (
        <authorContext.Provider value={controller}>
            {props.children}
        </authorContext.Provider>
    )
}

export const useAuthorContext = ()=> useContext(authorContext)