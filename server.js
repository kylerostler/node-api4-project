const express = require('express')
const server = express()

server.use(express.json())

server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
    console.log(req.params.id)
})

module.exports = server