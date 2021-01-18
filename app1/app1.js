const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('app1')
})

app.listen(port, () => {
  console.log(`app1 listening at http://localhost:${port}`)
})