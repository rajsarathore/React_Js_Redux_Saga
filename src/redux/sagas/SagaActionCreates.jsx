import { ADD_GROUP, GET_USERS, GET_USERS_DATA } from "./sagaActions";

export const getUsersAction=()=>({
type:GET_USERS
});
export const setUsers=(users)=>({
    type:GET_USERS_DATA,
    payload:users
});

export const addGroups=(users)=>({
    type:ADD_GROUP,
    payload:users
 });