

//create a logger middleware for redux

export const reduxLogger = store=> next=> action =>{

    console.log(`action`,action, store.getState())

    //IMPORTANT to make other middleware work!
    next(action);

}


export const  logActions = (...actions) => store=> next => action =>{

    if(actions.includes(action.type)){
        console.log(`action`,action, store.getState())
    }

    next(action);
}

export const thunkCopyCat = store=>next=>action=>{


    if(typeof(action) ==='function'){

        //run the function with dispatch and state
        action(store.dispatch, store.getState); //we can pass additional argument
    
        return ; //can't send to next middleware
    
    } else{
        return next(action);
    }


}