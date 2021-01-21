import { call, put } from "redux-saga/effects";
import { setUsers } from "./SagaActionCreates";

export function fetchPostsApi(url) {
    return fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => response.json())
      .then(data =>{return data})
      .catch(e => {
        console.log(e);
        return [];
      });
  }
function* getUsers(action){
    const url="https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json";
    console.log('getUser call')
    const users= yield call(fetchPostsApi, url);
    console.log(JSON.stringify(users))
    yield put(setUsers(users))
}
export default getUsers;