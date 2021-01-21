import { combineReducers } from "redux";
import getGroups from "./getGroups";
import getUsers from "./getUsers";

const AppReducers=combineReducers({users:getUsers,groups:getGroups});
export default AppReducers;