const axios=require('axios')
let date=new Date(new Date().setSeconds(00))
var values = {time:date, children: [{ name: 'Mongoose Tutorial', origin: 'bangalore', destination: 'mysore',timeStamp:Date.now() },
{ name: 'NodeJS tutorial', origin: 'delhi', destination: 'indore',timeStamp:Date.now() },
{ name: 'MongoDB Tutorial', origin: 'kolkata', destination: 'darjeling',timeStamp:Date.now()}]}

let val=JSON.stringify(values)

function data(){
    let i=0
    setInterval(()=>{
        axios.post('http://localhost:3025/persons',val,{headers:{
            'content-type':'application/json'
        }})
        .then((response)=>{
            i++
            console.log(response.data,i)
        })
        .catch((err)=>{
            console.log(err)
        })
    },100000)
}
console.log(data())
