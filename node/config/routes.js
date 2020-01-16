const express=require('express')
const router=express.Router()
const personController=require('../app/controller/personController')

router.get('/person',personController.list)
router.get('/person/:id',personController.show)
router.post('/person',personController.create)


module.exports=router