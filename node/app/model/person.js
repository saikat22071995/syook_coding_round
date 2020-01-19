const mongoose=require('mongoose')
const moment=require('moment')
const sha256=require('sha256')
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
    secret_key:{
        type:String
    },
    timeStamp:{
        type:Date,
        default:date
    }
})

personSchema.pre('save',function(next){
    const person=this
    if(person.isNew){
        let enc=sha256(person.name,person.origin,person.destination)
        person.secret_key=enc
        console.log('Encryption SHA256',enc)
        next()
   }
   else{
       next()
   }   
})

var parentSchema=new Schema({
    time:Date,
    children:[personSchema],
})


const Parent=mongoose.model('parent',parentSchema)

module.exports=Parent
