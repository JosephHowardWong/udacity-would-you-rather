import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

function storeLocalStorage(state) {
  try {
    localStorage.setItem("localState", JSON.stringify(state))
  } catch (e) {
    console.warn(e)
  }
}

function getLocalStorage() {
  try {
    const storedState = localStorage.getItem("localState")
    if(storedState === null) {
      return undefined
    }
    return JSON.parse(storedState)
  } catch (e) {
    console.warn(e)
    return undefined
  }
}

const store = createStore(reducer, getLocalStorage(), middleware)

store.subscribe(() => storeLocalStorage(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
