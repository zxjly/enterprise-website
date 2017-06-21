/**
 * Created by James on 2017/6/20.
 */
let $ = window.$;
/**
 * 这里主要是借用jQuery中实现的promise功能, 来避免像以前那样反复传递回调函数的写法
 */
const errHandler = (e) => {
  alert('[XHR: Failed] 详细请查看控制台!');
  console.error(e);
};
const xhr = ({url, data=null, method='get', contentType="application/json"}, errHandler=errHandler,) => {
  const defer = $.Deferred();
  $.ajax({
    type: method,
    url: url,
    data: data,
    contentType: contentType,
  })
    .done(defer.resolve)
    .fail(errHandler);
  return defer.promise();
}
export default xhr;
