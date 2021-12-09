import { combineReducers } from 'redux'
import tasks from './tasks'
import filters from './filters'

const reducer = combineReducers({
  tasks,
  filters,
})

export default reducer
