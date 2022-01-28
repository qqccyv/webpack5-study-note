fetch('/api/hello')
  .then(res => {
    return res.text()
  })
  .then(res => {
    console.log(res);
  })