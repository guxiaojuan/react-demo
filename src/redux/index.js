// import {combineReducers, applyMiddleware, createStore} from 'redux';
import {combineReducers} from 'redux';
// import {createLogger} from 'redux-logger';

/*
* createLogger是redux的一个中间件，可以console出每一个action后数据的详细处理过程，调试方便
*
*/

// const loggerMiddleware = createLogger();
// const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore);

import customListReducer  from './modules/customListReducer'

const reducer = combineReducers({
	customListReducer
})

// const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState)
export default reducer