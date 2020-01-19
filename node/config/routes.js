const express=require('express')
const router=express.Router()
const personController=require('../app/controller/personController')
const {personHash}=require('../app/middleware/encrypt')

router.get('/persons',personController.list)
router.get('/persons/:id',personController.show)
router.post('/persons',personHash,personController.create)


module.exports=router