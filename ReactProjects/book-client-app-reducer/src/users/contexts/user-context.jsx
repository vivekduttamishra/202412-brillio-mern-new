
import createContextProvider,{actionReducer} from '../../utils/contexts/ReducerContext'

class UserService{}

const userService =new UserService();

const userActions={
    login: userService.login,
    logout: userService.logout,
    register: {actionType:'login', action:userService.register }
}

const userReducerActions={
    login: (store,user)=> ({user}),
    logout: (store)=> ({user: null}),
    register: (store,user)=> ({user})
}

export default createContextProvider( actionReducer(userReducerActions),{
    contextName:'User',
    storeName:"user",
    initialValue:{user:null},
    actionCreators: userActions
});