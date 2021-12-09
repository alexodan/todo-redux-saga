import { all, call, put, takeEvery } from 'redux-saga/effects'
import {
  createTaskSuccess,
  CREATE_TASK_REQUEST,
  deleteTaskSuccess,
  DELETE_TASK_REQUEST,
  REQUEST_TASKS,
  setTasks,
  toggleTaskSuccess,
  TOGGLE_TASK_REQUEST,
} from './reducers/tasks'
import { deleteTask, getTasks, postTask, toggleTask } from './api'

export function* requestTasksSaga() {
  const tasks = yield call(getTasks)
  yield put(setTasks(tasks))
}

export function* createTaskSaga({ task }) {
  const newTask = {
    id: task.id,
    description: task.description,
    completed: false,
  }
  yield call(postTask, newTask)
  yield put(createTaskSuccess(newTask))
}

export function* toggleTaskSaga({ updatedTask }) {
  yield call(toggleTask, updatedTask)
  yield put(toggleTaskSuccess(updatedTask))
}

export function* deleteTaskSaga({ id }) {
  yield call(deleteTask, id)
  yield put(deleteTaskSuccess(id))
}

// WATCHERS

export function* watchRequestTasks() {
  yield takeEvery(REQUEST_TASKS, requestTasksSaga)
}

export function* watchCreateTask() {
  yield takeEvery(CREATE_TASK_REQUEST, createTaskSaga)
}

export function* watchToggleTask() {
  yield takeEvery(TOGGLE_TASK_REQUEST, toggleTaskSaga)
}

export function* watchDeleteTask() {
  yield takeEvery(DELETE_TASK_REQUEST, deleteTaskSaga)
}

export default function* rootSaga() {
  yield all([
    watchRequestTasks(),
    watchCreateTask(),
    watchToggleTask(),
    watchDeleteTask(),
  ])
}
