import {initialState} from '../state/InitialState'
function getGroups(state=initialState.groups,action){
    console.log('state: '+JSON.stringify(state))
    return state;
}
export default getGroups;