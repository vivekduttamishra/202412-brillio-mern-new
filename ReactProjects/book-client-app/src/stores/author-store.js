import AuthorService from "../authors/services/AuthorService";
import delay from '../utils/delay';
import { setStatus } from "./status-store"

const authorService = new AuthorService();

//actions that we will use.
export const AuthorActions = {
    AUTHORS: "AUTHORS",
    AUTHOR_SELECT: "AUTHOR_SELECT",
    AUTHOR_ADD: "AUTHOR_ADD",
    AUTHOR_DELETE: "AUTHOR_DELETE",
    AUTHOR_UPDATE: "AUTHOR_UPDATE",
    AUTHOR_UNSELECT: "AUTHOR_UNSELECT"
}

export const authorsReducer = (authors = [], action) => {
    switch (action.type) {
        case AuthorActions.AUTHORS: //setting a new list of authors
            return action.payload;

        case AuthorActions.AUTHOR_ADD: //add new author to existing list
            return [...authors, action.payload]


        case AuthorActions.AUTHOR_DELETE: //{ type:'AUTHOR_DELETE', payload: 'jeffrey-archer'}
            return authors.filter(a => a.id !== action.payload)

        case AuthorActions.AUTHOR_UPDATE: //updating an author
            return authors.map(a => a.id === action.payload.id ? action.payload : a)

        default:
            return authors;
    }

}

export const selectedAuthorReducer = (author = null, action) => {
    switch (action.type) {
        case AuthorActions.AUTHOR_SELECT:
            return action.payload;

        case AuthorActions.AUTHOR_DELETE:
            if (author?.id === action.payload)
                return null;
        case AuthorActions.AUTHOR_UNSELECT:
            return null;
    }
    return author;
}


export const getAllAuthors=async  (dispatch)=>{
    return async dispatch => {
        try {
            setStatus(dispatch, AuthorActions.AUTHORS,"pending")
            let authors = await authorService.getAllAuthors();
            dispatch({ type: AuthorActions.AUTHORS, payload: authors });
            setStatus(dispatch, AuthorActions.AUTHORS,"success")
        } catch (error) {
            setStatus(dispatch, AuthorActions.AUTHORS,"error",error)
        }
    }
}

export const getAuthorById =async (id,dispatch) => {
    return async dispatch => {
        try {
            setStatus(dispatch, AuthorActions.AUTHOR_SELECT,"pending")
            let author = await authorService.getAuthorById(id);
            setStatus(dispatch, AuthorActions.AUTHOR_SELECT,"success")
            dispatch({ type: AuthorActions.AUTHOR_SELECT, payload: author });
        } catch (error) {
            setStatus(dispatch, AuthorActions.AUTHOR_SELECT,"error",error)
            
        }
    }
}

export const deleteAuthorById= (id,dispatch)=>{
    dispatch({type: AcuthorActions.DELETE, payload: id})
}
