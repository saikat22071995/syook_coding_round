const axios=require('axios')
let date=new Date(new Date().setSeconds(00))
var values = {time:date, children: [{ name: 'Mongoose Tutorial', origin: 'bangalore', destination: 'mysore',timeStamp:Date.now() },
{ name: 'NodeJS tutorial', origin: 'delhi', destination: 'indore',timeStamp:Date.now() },
{ name: 'MongoDB Tutorial', origin: 'kolkata', destination: 'darjeling',timeStamp:Date.now()}]}

function data(){
    let i=0
    setInterval(()=>{
        axios.post('http://localhost:3025/persons',values,{headers:{
            'content-type':'application/json'
        }})
        .then((response)=>{
            i++
            console.log('Data Inserted Successfully after encryption and decryption',i)
        })
        .catch((err)=>{
            console.log(err)
        })
    },60000)
}
console.log(data())
