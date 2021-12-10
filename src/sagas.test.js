import { call, put } from '@redux-saga/core/effects'
import * as api from './api'
import { createTaskSuccess, setTasks } from './reducers/tasks'
import { createTaskSaga, requestTasksSaga } from './sagas'

const tasks = ['blah']

test('requestTasksSaga', done => {
  const gen = requestTasksSaga()
  expect(gen.next().value).toEqual(call(api.getTasks))
  expect(gen.next(tasks).value).toEqual(put(setTasks(tasks)))
  done()
})

test('createTaskSaga', done => {
  const task = {
    id: 'id',
    description: 'description',
    completed: false,
  }
  const gen = createTaskSaga({ task })
  expect(gen.next().value).toEqual(call(api.postTask, task))
  expect(gen.next().value).toEqual(put(createTaskSuccess(task)))
  done()
})
