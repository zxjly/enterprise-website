/**
 * Created by James on 2017/6/20.
 */
/**
   // 封装好的异步方法，非原创。
   import { asyncComponent } from './AsyncComponent'
   //使用asyncComponent()，你就能将Promise的返回值赋给一个变量
   const Search = asyncComponent(() => import("./containers/Search/searchContainer"))
   <Route path="/xx" component={Search} />


   请注意import()方法是异步的，你不能这样使用
   const Foo = import("./xx") // 错误的写法
   <Route path="/xx" component={import("./xxx")} /> //错误的写法

 */
import React from 'react'
export const asyncComponent = loadComponent => (
  class AsyncComponent extends React.Component {
    state = {
      Component: null,
    }

    componentWillMount() {
      if (this.hasLoadedComponent()) {
        return;
      }

      loadComponent()
        .then(module => module.default)
        .then((Component) => {
          this.setState({ Component });
        })
        .catch((err) => {
          console.error(`Cannot load component in <AsyncComponent />`);
          throw err;
        });
    }

    hasLoadedComponent() {
      return this.state.Component !== null;
    }

    render() {
      const { Component } = this.state;
      return (Component) ? <Component {...this.props} /> : null;
    }
  }
);
