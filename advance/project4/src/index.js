import helloWord from "./helloWord";
import imageSrc from '../assets/logo.png';
helloWord()

const img = document.createElement('img');
img.src = imageSrc
document.body.appendChild(img)