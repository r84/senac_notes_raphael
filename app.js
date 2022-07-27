const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Login')
})

app.get('/notes', (req, res) => {
    res.send('notes')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})