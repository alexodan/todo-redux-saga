import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'
import { selectFilter } from '../reducers/filters'
import {
  createTaskRequest,
  deleteTaskRequest,
  requestTasks,
  toggleTaskRequest,
} from '../reducers/tasks'
import { selectTasks } from '../reducers/tasks'
import TaskItem from './TaskItem'

const Tasks = () => {
  const tasks = useSelector(selectTasks)
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()
  const [newTaskDescription, setNewTaskDescription] = useState('')

  useEffect(() => {
    dispatch(requestTasks())
  }, [dispatch])

  const handleChange = e => setNewTaskDescription(e.target.value)

  const createNewTask = () => {
    dispatch(
      createTaskRequest({
        id: uuid(),
        description: newTaskDescription,
      })
    )
    setNewTaskDescription('')
  }

  const handleKeyPress = e => {
    // key pressed is enter
    if (e.keyCode === 13) {
      createNewTask()
    }
  }

  const toggleCompleted = id => {
    const taskToUpdate = tasks.find(t => t.id === id)
    dispatch(
      toggleTaskRequest({
        ...taskToUpdate,
        completed: !taskToUpdate.completed,
      })
    )
  }

  const deleteTask = id => {
    dispatch(deleteTaskRequest(id))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') {
      return true
    }
    if (filter === 'active' && !task.completed) {
      return true
    }
    return filter === 'completed' && task.completed
  })

  return (
    <Container>
      <Input
        type="text"
        placeholder="What needs to be done?"
        value={newTaskDescription}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <List>
        {filteredTasks.map(({ id, description, completed }) => (
          <TaskItem
            key={id}
            id={id}
            description={description}
            completed={completed}
            onToggleCompleted={toggleCompleted}
            onDelete={deleteTask}
          />
        ))}
      </List>
    </Container>
  )
}

const Container = styled.div`
  background-color: white;
  width: 100%;
`

const Input = styled.input`
  border: 1px solid #ededed;
  border-bottom: 1px solid #dddddd;
  font-size: 2rem;
  font-weight: 200;
  height: 52px;
  padding: 5px;
  width: 100%;
  &::-webkit-input-placeholder {
    color: #ccc;
    font-style: italic;
    font-weight: 300;
  }
  &::-moz-placeholder {
    color: #ccc;
    font-style: italic;
    font-weight: 300;
  }
  &::-ms-input-placeholder {
    color: #ccc;
    font-style: italic;
    font-weight: 300;
  }
`

const List = styled.ul`
  width: 100%;
`

export default Tasks
