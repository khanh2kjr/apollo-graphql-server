const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const apolloServer = require('./apollo-server')

const app = express()
app.use(cors())

const connectMongoServer = async () => {
  try {
    await mongoose.connect('mongodb://localhost/graphql', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (error) {
    console.log(error)
  }
}

const startService = async () => {
  try {
    await apolloServer.start()
    apolloServer.applyMiddleware({ app })
  } catch (error) {
    console.log(error)
  }
}

connectMongoServer()
startService()

app.listen(4000)
