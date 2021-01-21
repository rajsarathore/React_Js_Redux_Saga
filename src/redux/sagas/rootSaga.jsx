import {all, takeLatest,} from 'redux-saga/effects'
import getUsers from './getUsers'
import { GET_USERS } from './sagaActions';
function* rootSaga(){
    yield all([
        takeLatest(GET_USERS,getUsers)
    ]);
}
export default rootSaga;