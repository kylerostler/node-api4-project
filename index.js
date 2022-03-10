require('dotenv').config()

const express = require('express')
const PORT = process.env.PORT || 9000
const server = express()

server.get('/', (req, res) => {
    res.end('<h1>hello world<h1>')
})

server.listen(PORT, () => {
    console.log(`server is up on ${PORT}, user is ${process.env.USERNAME}`)
})