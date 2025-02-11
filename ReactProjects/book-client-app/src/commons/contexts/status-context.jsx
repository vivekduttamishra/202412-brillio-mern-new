

import { createContext, useReducer } from "react";

const store={
    USER_LOGIN: {status:'error', error:{ code:404, message:"invalid credentials"}},
    BOOK_LIST : {status:'success'},
    BOOK_DETAILS:{status:'executing'}
}

const context = createContext();

const statusReducer=(currentStatus, action)=>{

    //{type: 'STATUS_ACTION', payload:{action:'USER_LOGIN', status:'error', error:value}}
    switch(action.type){
        case 'STATUS_SET': 
            return {
                ...currentStatus,
                [action.payload.action]: {status: action.payload.status, error: action.payload.error}
            }
        default:
            return currentStatus;
    }

}


export const StatusContext=({children})=>{
    //state management here

    const [status,dispatch] = useReducer(statusReducer,{});

    const controller={
        status,
        setStatus: (action,status,error)=> dispatch({type:"STATUS_SET", payload:{action,status,error}}),
        getStatus: (action)=>{
            return status[action]||{status:'pending'}
        }
    }



    return <context.Provider value={controller}>
        {children}
    </context.Provider>
}


export const useStatusContext=()=>  useContext(context);