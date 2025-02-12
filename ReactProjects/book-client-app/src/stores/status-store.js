
// const store={
//     USER_LOGIN: {status:'error', error:{ code:404, message:"invalid credentials"}},
//     BOOK_LIST : {status:'success'},
//     BOOK_DETAILS:{status:'executing'}
// }

export const statusReducer=(currentStatus={}, action)=>{

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

export const setStatus=(dispatch,action,status,error)=>{
    dispatch({type:"STATUS_SET", payload:{action,status,error}})
}

export const getStatus=(action,store)=>{
    const status = store.status[action];
    return status || {action, status:"pending"}
}