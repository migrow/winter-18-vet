import { createStore, combineReducers, applyMiddleware } from 'redux'

import { resources } from './reducers/resources'

import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({ resources }),
  applyMiddleware(thunk)
)

export default store
