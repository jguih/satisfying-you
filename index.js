const express = require('express')
const app = express()
const port = 3000

const research = require('./routers/research')
app.use('/research', research)

const account = require('./routers/account')
app.use('/account', account)

const options = require('./config/sendFileOptions')

app.get('/', (req, res) => {
  res.sendFile('/home.html', options)
})

app.get('/login', (req, res) => {
  res.sendFile('/login.html', options)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})