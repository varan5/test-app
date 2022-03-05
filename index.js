const express = require('express')
const app = express()
const port = process.env.PORT || 5000


app.get('/test', (req, res) => {
  res.send('Test route is working')
})

app.get('/testagain', (req, res) => {
  res.send('test again route is also working')
})

app.get('/', (req, res) => {
  res.send('Welcome to the updated home page...')
})

app.get('/newroute', (req, res) => {
  res.send('This is the new route which is added')
})

app.listen(port, () => {
  console.log('Server listening on port: ' + port)
})