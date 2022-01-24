import helloWord from "./helloWord";
import imageSrc from '../assets/logo.png';
import svgUrl from '../assets/aqzx_img.svg';
import exampleText from '../assets/example.txt';
import gif from '../assets/micLoading.gif';
import './style.css';
import './style.less';

import _ from 'lodash'

console.log(_.join(['index', 'module', 'loaded'], ' '));


helloWord()

const img = document.createElement('img');
img.src = imageSrc
document.body.appendChild(img)
const svgImg = document.createElement('img');
svgImg.src = svgUrl
svgImg.style.cssText = "width: 200px;height: auto;"
document.body.appendChild(svgImg)

const textBox = document.createElement('p');
textBox.textContent = exampleText;
document.body.appendChild(textBox)


const gifImg = document.createElement('img');
gifImg.src = gif;
document.body.appendChild(gifImg);


// 第三种分包方法 动态加载   第一种用法懒加载
let btn = document.createElement('button');
btn.innerText = '点击使用加法'
btn.addEventListener('click', () => {
  // 指定包名 prefetch(预获取)：将来某些导航下可能需要的资源  再浏览器空闲的时候先预加载，然后使用的时候再引入，会更快
  import(/* webpackChunkName: 'math' *//* webpackPrefetch: true */'./math').then(({ default: add }) => {
    console.log(add(1, 2));
  })
  // 指定包名 preload(预加载)：当前导航下可能需要资源  在主包引入的时候同步加载，主要用到比较重要的一些资源上面，要慎用。
  // import(/* webpackChunkName: 'math' *//* webpackPreload: true */'./math').then(({ default: add }) => {
  //   console.log(add(1, 2));
  // }
  // )
}
)
document.body.appendChild(btn)


