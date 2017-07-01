/**
 * Created by James on 2017/6/20.
 */
import { applyMiddleware, compose, createStore } from 'redux'
import middlewares from './middlewares';
import createRootReducer from '../reducers';

const store = createStore(
  createRootReducer(),
  {},           // 初始数据
  compose(      // 中间件
    applyMiddleware(...middlewares)
  )
);

export default store;
