// 通过异步加载远端的容器组件，利用对应的模块类型解析组件
import('app1/List').then(({ default: List }) => {
  let div = document.createElement('div');
  div.innerHTML = List(5);
  document.body.append(div);
})