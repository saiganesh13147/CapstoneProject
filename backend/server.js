const express = require('express')
const dotenv = require('dotenv')
const app = express()

app.get('/', (req, res) => {
  res.send('API is working')
})

app.listen(5000, console.log('Server running on port 5000'))
