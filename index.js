const express = require('express')
const http = require('http')
const app = express()


const hostname = 'localhost'
const port = 8000;

const server = http.createServer((res, req) =>{
    res.statusCode=500;
    res.end("Hello user!!")


})
server.listen((hostname, port ) =>{
    console.log(`Server is started at http://${hostname}:${port}/:`)
})