const express = require('express')
const app = express()
const db = require('./db')
require('dotenv').config()
PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser')
app.use(bodyParser.json())


app.get('/', function (req, res) {
  res.send('Welcome to our hotel!!')
})



app.get('/Biriyani', function (req, res) {
  biriyani = {
    "name": "Hydrabadi",
    "IsChicken": false,
    "IsMutton": true,
    "IsEgg": true,
    "count": 1
  }
  res.send(biriyani)
})

const personRoutes = require('./routes/personRouter')
app.use('/person',personRoutes)

const menuItemRoutes = require('./routes/menuRouter')
app.use('/menu',menuItemRoutes)

app.listen(PORT, () => console.log("server is running on port "+PORT))