const mongoose=require('mongoose')
const moment=require('moment')
let date=new Date(new Date().setSeconds(00)).toISOString()
console.log(date)
console.log(typeof date)

const Schema=mongoose.Schema
const personSchema=new Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },
    origin:{
        type:String,
        required:true,
        minlength:1,
        maxlength:30
    },
    destination:{
        type:String,
        required:true,
        minlength:1,
        maxlength:30
    },
    timeStamp:{
        type:Date,
        default:date
    }
})

var parentSchema=new Schema({
    time:Date,
    children:[personSchema],
})
const Parent=mongoose.model('parent',parentSchema)

var values = {time:date, children: [{ name: 'Mongoose Tutorial', origin: 'bangalore', destination: 'mysore',timeStamp:date },
{ name: 'NodeJS tutorial', origin: 'delhi', destination: 'indore',timeStamp:date },
{ name: 'MongoDB Tutorial', origin: 'kolkata', destination: 'darjeling',timeStamp:date }]};

setInterval(()=>{
    //console.log(values)
    Parent.collection.insertOne(values, function (err, data) {
        if (err){ 
            return console.error(err);
            } else {
            //console.log(data)
            console.log("Multiple documents inserted to Collection");
            return
            }
    });    
    //console.log('exit')
},5000)





module.exports=Parent
