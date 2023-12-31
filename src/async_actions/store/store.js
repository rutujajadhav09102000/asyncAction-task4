import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducer/rootReducer';
const store = createStore(rootReducer,applyMiddleware(logger,thunk));
export default store


