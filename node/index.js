const express=require('express')
const configureDB=require('./config/database')
const router=require('./config/routes')
const cors=require('cors')
const app=express()
const port=3025
const socket=require('socket.io')
app.use(express.json())
configureDB()
app.use(cors())
app.get('/',(req,res)=>{
    res.send('syook')
})
app.use('/',router)

const server=app.listen(port,()=>{
    console.log('listening on port',port)
})

const io = socket(server);

io.on('connection', (socket) => {
    console.log('hii')
    console.log(socket.id);
});