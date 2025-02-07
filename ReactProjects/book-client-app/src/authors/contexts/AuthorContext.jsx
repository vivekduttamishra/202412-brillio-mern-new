import {useState, createContext, useContext } from "react";
import AuthorService from "../services/AuthorService";

const authorService = new AuthorService();

const authorContext = createContext();

export const AuthorContext =(props)=>{
    const [authors,setAuthors]= useState([]);
    
    const getAllAuthors= async()=>{
        let authors =await authorService.getAll();
        setAuthors(authors);
    }

    let _context={
        authors,
        getAllAuthors
    }

    return (
        <authorContext.Provider value={_context}>
            {props.children}
        </authorContext.Provider>
    )
}

export const useAuthorContext = ()=> useContext(authorContext)