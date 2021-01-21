import React from 'react'
import {Provider} from 'react-redux'
import Home from './components/Home';
import configureStore from './redux/configureStore';
import {initialState} from './redux/state/InitialState'
function App() {
  return (
      <Provider store={configureStore(initialState)}>
        <Home></Home>
      </Provider>
  );
}

export default App;

