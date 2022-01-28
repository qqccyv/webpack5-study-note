const http = require('http');
const app = http.createServer((req, res) => {
  if (req.url == '/api/hello') {
    res.end('hello')
  }
}
)
app.listen(3000, () => {
  console.log('listen http://localhost:3000');
}
)