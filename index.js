//1. import json server

const jsonServer=require('json-server')

// 2. create a server appliction using jsonServer

const restServer = jsonServer.create()

// 3.setup path for db.json
const router = jsonServer.router('db.json')

//4.return middleware

const middleware = jsonServer.defaults()

// 5.set port number

const port =3001


// use in restServer
restServer.use(middleware)
restServer.use(router)

// to run the server
restServer.listen(port,()=>{
    console.log("Restuarent server listening on the port"+port);
})
