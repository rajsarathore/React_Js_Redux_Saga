import { GET_USERS_DATA } from '../sagas';
import {initialState} from '../state/InitialState'
function getUsers(users=initialState.users,action){
    console.log('state: '+JSON.stringify(users))
    switch(action.type){
        case GET_USERS_DATA:{
            users=action.payload;
        }
    }
    return users;
}
export default getUsers;