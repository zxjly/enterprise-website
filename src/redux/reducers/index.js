/**
 * Created by James on 2017/7/1.
 */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import store from '../store';
import userReducer from '../reducers/user';

// 同步的Reducers， 即应用初始化时必须要使用到的
const syncReducers = {
  router: routerReducer,
  user: userReducer
};

// 异步加载的Reducers( 按需加载时将会使用到）
const asyncReducers = {};

/**
 *
 * @returns {Reducer<S>}
 */
function createRootReducer(){
  return combineReducers({
    ...syncReducers,
    ...asyncReducers
  })
}

/**
 * 按需加载时，立即注入对应的 Reducer
 * @param  {String}   key
 * @param  {Function} reducer
 */
function injectReducer(key, reducer) {
  asyncReducers[key] = reducer
  store.replaceReducer(createRootReducer());
}
export default createRootReducer;
export {
  createRootReducer,
  injectReducer
}
