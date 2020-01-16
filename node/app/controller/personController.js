const Parent=require('../model/person')

module.exports.list=(req,res)=>{
    Parent.find({})
    .then((persons)=>{
        res.json(persons)
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Parent.findOne({_id:id})
    .then((person)=>{
        if(person){
            res.json(person)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports.create=(req,res)=>{
    const body=req.body
    const parent=new Book(body)
    Parent.save()
    .then((book)=>{
        res.json(book)
    })
    .catch((err)=>{
        console.log(err)
    })

}

