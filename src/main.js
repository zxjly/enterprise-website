/**
 * Created by JamesZhang on 2017/6/17.
 */
import React from 'react'
import ReactDOM from "react-dom";
import {HashRouter as Router, Link, Route} from "react-router-dom"

import {asyncComponent} from "./utils"

import './assets/styles/hello.less'

const Hello = asyncComponent(() => import('./components/hello'));

ReactDOM.render(
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
  </Router>,
  document.getElementById('app')
)

