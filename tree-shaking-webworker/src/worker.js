self.onmessage = (message) => {
  console.log('this is worker.js', message)
  self.postMessage({
    answer: 111
  })
}

