export const REQUEST_TASKS = 'REQUEST_TASKS'
export const SET_TASKS = 'SET_TASKS'
export const CREATE_TASK_REQUEST = 'CREATE_TASK_REQUEST'
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS'
export const TOGGLE_TASK_REQUEST = 'TOGGLE_TASK_REQUEST'
export const TOGGLE_TASK_SUCCESS = 'TOGGLE_TASK_SUCCESS'
export const DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST'
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS'

const initialState = {
  tasks: [],
}

export const selectTasks = state => state.tasks.tasks

export const requestTasks = () => {
  return {
    type: REQUEST_TASKS,
  }
}

export const setTasks = tasks => {
  return {
    type: SET_TASKS,
    tasks,
  }
}

export const createTaskRequest = newTaskDescription => {
  return {
    type: CREATE_TASK_REQUEST,
    task: newTaskDescription,
  }
}

export const createTaskSuccess = newTask => {
  return {
    type: CREATE_TASK_SUCCESS,
    task: newTask,
  }
}

export const toggleTaskRequest = task => {
  return {
    type: TOGGLE_TASK_REQUEST,
    updatedTask: task,
  }
}

export const toggleTaskSuccess = task => {
  return {
    type: TOGGLE_TASK_SUCCESS,
    updatedTask: task,
  }
}

export const deleteTaskRequest = id => {
  return {
    type: DELETE_TASK_REQUEST,
    id,
  }
}

export const deleteTaskSuccess = id => {
  return {
    type: DELETE_TASK_SUCCESS,
    id,
  }
}

const tasks = (state = initialState, payload) => {
  switch (payload.type) {
    case SET_TASKS:
      return {
        tasks: payload.tasks,
      }
    case CREATE_TASK_SUCCESS:
      return {
        tasks: [...state.tasks, payload.task],
      }
    case TOGGLE_TASK_SUCCESS:
      return {
        tasks: state.tasks.map(task =>
          payload.updatedTask.id === task.id ? payload.updatedTask : task
        ),
      }
    case DELETE_TASK_SUCCESS:
      return {
        tasks: state.tasks.filter(t => t.id !== payload.id),
      }
    default:
      return state
  }
}

export default tasks
