const express=require('express')
const configureDB=require('./config/database')
const router=require('./config/routes')
const cors=require('cors')
const app=express()
const net=require('net')
const port=3025
// const socket=require('socket.io')
app.use(express.json())
configureDB()
app.use(cors())
app.get('/',(req,res)=>{
    res.send('syook')
})
app.use('/',router)

app.listen(port,()=>{
    console.log('listening on port',port)
})

// var server = net.createServer(function(socket) {
// 	socket.write('Echo server\r\n');
// 	socket.pipe(socket);
// });

// server.listen(1337, '127.0.0.1');