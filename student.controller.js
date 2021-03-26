const Student = require('../models/student.model')

exports.test=(req,res)=>{
    res.send('Greetings from test controller')
}

exports.AddStudent=(req,res)=>{
    let student=new Student({
        name:req.body.name,
        age:req.body.age,
        gender:req.body.gender
    })
    student.save((err)=>{
        if (err){
            return next(err)
        }
        res.send('Student added successfully')
    })}

exports.UpdateStudent=(req,res)=>{
    Student.findByIdAndUpdate(req.params.id,{$set: req.body},(err,student)=>{
        if (err) return next(err)
        res.send('Student Profile Has been Updated')
    })}

exports.DeleteStudent=(req,res)=>{
    Student.findByIdAndRemove(req.params.id,(err)=>{
        if (err) return next(err)
        res.send('Student Profile Has Been Deleted') 
    })}

exports.ViewDetails=(req,res)=>{
    Student.findById(req.params.id,(err, student)=>{
        if (err) return next(err)
        res.send(student)
    })}