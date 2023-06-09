require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// My Routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const ipfsRoutes = require('./routes/ipfs')
const filesRoutes = require('./routes/files')

// DataBase Connection
mongoose.connect(process.env.DATABASE).then(() => {
  console.log('DB CONNECTED!!!')
})
// .catch(console.log('***DATABASE CONNECTION ERROR!! !***'))

//Port Number
const port = process.env.PORT || 8000

// Middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

// routes
app.use('/api', authRoutes)
app.use('/api', userRoutes)
app.use('/api', ipfsRoutes)
app.use('/api', filesRoutes)
app.get('/', (req, res) => {
  return res.send(
    'this App is an api for backend that stores data on the blockchain IPFS and MongoDB, please kindly use postman or clone the backend repo to test the app. repo is :- https://github.com/swebreza/blockchainstorage.git . and then ``cd backend`` and ``npm start`` to start the server.'
  )
})

app.get('/login', (req, res) => {
  return res.send('Hello login')
})

app.get('/signout', (req, res) => {
  return res.send('Hello sign out')
})
// root node route
app.listen(port, () => {
  console.log(`Server is running on Port ${port}`)
})

// Get
// Post
// put
// delete
