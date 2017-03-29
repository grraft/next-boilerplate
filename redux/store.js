import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as internalReducer } from './reducer.js'
import { reducer as reduxFormReducer } from 'redux-form'

// enable devtools if available
const composeEnhancers = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
const reducer = combineReducers({
  app: internalReducer,
  form: reduxFormReducer
})

export const initStore = (initialState) => {
  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
  )
}
