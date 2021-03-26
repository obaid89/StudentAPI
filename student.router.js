const express=require('express');
const router=express.Router();
const student_controller=require('../controller/student.controller');

router.get('/test',student_controller.test);
router.post('/create',student_controller.AddStudent);
router.put('/:id/update',student_controller.UpdateStudent);
router.delete('/:id/delete',student_controller.DeleteStudent);
router.get('/:id',student_controller.ViewDetails);



module.exports=router;