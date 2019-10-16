import {applyMiddleware, createStore} from 'redux'
import reducers from '../reducer/index'
import {middleware} from  '../../navigators/AppNavigators';

const middlewares = [
    middleware,
];
/** * 创建store */
export default createStore(reducers, applyMiddleware(...middlewares));