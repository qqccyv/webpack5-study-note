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
document.body.appendChild(gifImg)


