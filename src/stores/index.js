import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'
import todoApp from '../reducers'

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore)
const configureStore = (initialState) => createStoreWithMiddleware(todoApp, initialState)
const store = configureStore()

export default store