require('dotenv').config()

const express = require('express')
const PORT = process.env.PORT || 9000
const server = require('./server.js')


server.listen(PORT, () => {
    console.log(`server is up on ${PORT}, user is ${process.env.USERNAME}`)
})