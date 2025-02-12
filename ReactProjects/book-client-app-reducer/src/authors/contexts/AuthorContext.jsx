import {useState, createContext, useContext, useReducer } from "react";
import AuthorService from "../services/AuthorService";
import delay from '../../utils/delay';
import {useStatusContext} from '../../commons/contexts/status-context'
const authorService = new AuthorService();

const authorContext = createContext();

//sample store object
const _authorStore={
    authors:[],
    selectedAuthor:null
}

//actions that we will use.
export const AuthorActions={
    AUTHORS: "AUTHORS",
    AUTHOR_SELECT: "AUTHOR_SELECT",
    AUTHOR_ADD: "AUTHOR_ADD",
    AUTHOR_DELETE: "AUTHOR_DELETE",
    AUTHOR_UPDATE: "AUTHOR_UPDATE"    
}

const authorReducer=( authorStore, action)=>{
    switch(action.type){
        case AuthorActions.AUTHORS: //setting a new list of authors
            return {...authorStore, authors:action.payload}

        case AuthorActions.AUTHOR_SELECT: //selecting a single author
            return {...authorStore, selectedAuthor:action.payload}

        case AuthorActions.AUTHOR_ADD: //add new author to existing list
            return {
                ...authorStore,
                authors: [...authorStore.authors, action.payload]
            }

        case AuthorActions.AUTHOR_DELETE: //{ type:'AUTHOR_DELETE', payload: 'jeffrey-archer'}
            return {
                ...authorStore,
                authors: authorStore.authors.filter(a=>a.id!==action.payload),
                selectedAuthor: authorStore.selectedAuthor.id===action.payload?null: authorStore.selectedAuthor
            }

        case AuthorActions.AUTHOR_UPDATE: //updating an author
            return {
                ...authorStore,
                authors: authorStore.authors.map(a=>a._id===action.payload.id? action.payload:a)
            }


        default:
            return authorStore;
    }
}




export const AuthorContext =(props)=>{
    
    //const [authors,setAuthors]= useState([]);
    //const [selectedAuthor,setSelectedAuthor] = useState(null);
    const [authorStore,dispatch] = useReducer(authorReducer, _authorStore); 
    const {setStatus} = useStatusContext();
  

    let controller={
        //state
        authorStore,
        authors:authorStore.authors,
        selectedAuthor: authorStore.selectedAuthor,
        //actionCreators
        getAllAuthors: async()=>{
            try{

                setStatus(AuthorActions.AUTHORS,"executing");
                let authors = await authorService.getAll();
                setStatus(AuthorActions.AUTHORS,"success")
                dispatch({type: AuthorActions.AUTHORS, payload: authors});
            }catch(error){
                setStatus(AuthorActions.AUTHORS,"error",error)
            }
        },
        getAuthorById: async(id)=>{
            try{
                setStatus(AuthorActions.AUTHOR_SELECT,"executing");
                let author = await authorService.getById(id);
                dispatch({type: AuthorActions.AUTHOR_SELECT, payload: author});
                setStatus(AuthorActions.AUTHOR_SELECT,"success")
            }catch(error){
                setStatus(AuthorActions.AUTHOR_SELECT,"error",error)
            }
        },
        deleteAuthorById: (id)=>{
            //not deleting right now from api
            //just deleting from my react app.
            dispatch({type: AuthorActions.AUTHOR_DELETE, payload: id});
        }

    }

    return (
        <authorContext.Provider value={controller}>
            {props.children}
        </authorContext.Provider>
    )
}

export const useAuthorContext = ()=> useContext(authorContext)