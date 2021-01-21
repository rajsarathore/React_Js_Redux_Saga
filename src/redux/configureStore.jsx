import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// ...
import rootSaga from './sagas'
import AppReducers from './reducers'

function configureStore(initialState){
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
    AppReducers,
    initialState,
    applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(rootSaga)
    return store;
}
export default configureStore;