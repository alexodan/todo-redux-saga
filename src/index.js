import React from 'react'
import ReactDOM from 'react-dom'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App'
import reportWebVitals from './reportWebVitals'
import reducer from './reducers'
import rootSaga from './sagas'
import './index.css'

const sagaMiddleware = createSagaMiddleware()
const composedEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware))
export const store = createStore(reducer, composedEnhancers)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
