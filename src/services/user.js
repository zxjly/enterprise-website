/**
 * Created by James on 2017/7/1.
 */
import xhr from './xhr';

// 对应后端涉及用户认证的API
const url = {
  login: '/api/usr',
  logout: '/api/logout',
  check: '/api/check'
};

class User {
  checkLogin () {
    return xhr({url: url.check})
  }
  login(userData){
    return xhr({
      method: 'post',
      url: url.login,
      data: userData
    })
  }
  logout() {
    return xhr({
      url: url.logout
    })
  }
}

// 实例化后再导出
export default new User();
