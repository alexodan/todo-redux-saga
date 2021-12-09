import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers'
import rootSaga from './sagas'
import Wrapper from './Wrapper'

const sagaMiddleware = createSagaMiddleware()
const composedEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware))
export const store = createStore(reducer, composedEnhancers)
sagaMiddleware.run(rootSaga)

function App() {
  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  )
}

export default App
