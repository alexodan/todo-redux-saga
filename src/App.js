import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import Tasks from './components/Tasks'
import styled from 'styled-components'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

function App() {
  return (
    <Provider store={store}>
      <Container>
        <h1>todos</h1>
        <Tasks />
      </Container>
    </Provider>
  )
}

const Container = styled.div`
  align-items: center;
  color: #4d4d4d;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  max-width: 550px;
  min-width: 230px;

  h1 {
    color: rgba(175, 47, 47, 0.15);
    font-size: 5rem;
    font-weight: 300;
    margin-bottom: 30px;
  }
`

export default App
