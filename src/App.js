import Tasks from './components/Tasks'
import styled from 'styled-components'
import Filters from './components/Filters'
import { selectTasks } from './reducers/tasks'
import { useSelector } from 'react-redux'

function App() {
  const tasks = useSelector(selectTasks)
  return (
    <Container>
      <h1>todos</h1>
      <Tasks />
      <Footer>
        <Count>{tasks.length} items left</Count>
        <Filters />
      </Footer>
    </Container>
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

const Footer = styled.footer`
  background-color: white;
  border-top: 1px solid #e6e6e6;
  color: #777;
  height: 40px;
  padding: 10px;
  position: relative;
  width: 100%;
`

const Count = styled.span`
  left: 20px;
  position: absolute;
`

export default App
