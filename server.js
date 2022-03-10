const express = require('express')
const server = express()
const cors = require('cors')
const usersRouter = require('./users/users-router')
server.use(express.json())
server.use(cors())

server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
    res.send(`<h1>Fallback Route<h1>`)
})

module.exports = server