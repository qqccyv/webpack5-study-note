async function helloWord() {
  // console.log('你好世界!!!');
  let string = await getString()
  console.log(string);
}

function getString() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('你好世界')
    }, 2000);
  })
}

export default helloWord;
