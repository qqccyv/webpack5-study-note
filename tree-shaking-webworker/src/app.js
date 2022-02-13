import add from './math';
// css 等全局作用的变量或者文件，webpack默认是不进行tree shaking的
import './app.css'
// web worker
// 使用下列语法在webpack5中就可以直接支持webworker的使用
const worker = new Worker(new URL('./worker.js', import.meta.url));
worker.postMessage({
  question: '今天的幸运数字是多少？'
})
worker.onmessage = (message) => {
  console.log('this is app.js', message)
}

// service worker 
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js').then(registration => {
//       console.log('service worker 注册成功', registration);
//     }).catch(registrationError => {
//       console.error('service worker 注册失败', registrationError);
//     })
//   })
// }
// 通过workbox-webpack-plugin 插件生成service worker文件以后还需要在浏览器中进行注册，同时一定要注意清除缓存
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}


// tree shaking  在webpack5 中默认是开启tree shaking的，具体配置可以在package.json中的sideEffects中设置  true 所有文件都有副作用，不要删除，  【string】那些文件不要删除  false 所有文件都没有副作用，可以全部删除
console.log(add(1, 2));



