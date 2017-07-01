/**
 * Created by JamesZhang on 2017/6/17.
 */
import React from 'react'
import ReactDOM from 'react-dom';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './redux/store';

import {asyncComponent} from "./utils"

import './assets/styles/hello.less'

// const Nav = asyncComponent(() => import('./components/nav'));      // 异步加载组件

import Hello from './components/nav';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/about">关于</Link></li>
          <li><Link to="/topics">主题列表</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Hello}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)

