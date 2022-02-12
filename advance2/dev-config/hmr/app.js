import './app.css'
import './input'
var btn = document.createElement('button');
btn.textContent = '添加dom'

document.body.appendChild(btn);
function addDiv() {
  var div = document.createElement('div');
  div.classList.add('testdiv')
  document.body.appendChild(div);
  console.log(111);
}
btn.addEventListener('click',
  addDiv
)
// js中的热替换需要如下配置，css 通过css-loader 等已经帮我们处理好了
if (module.hot) {
  module.hot.accept('./input.js', () => {
  }
  )
}

