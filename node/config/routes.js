const express=require('express')
const router=express.Router()
const personController=require('../app/controller/personController')

router.get('/persons',personController.list)
router.get('/persons/:id',personController.show)
router.post('/persons',personController.create)


module.exports=router