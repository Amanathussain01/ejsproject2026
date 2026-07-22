const express = require('express');
const StudentController = require('../controllers/student.controllers');
const Student = require('../models/Student');
const route = express.Router();
route.use(express.urlencoded({extended: false}))

route.get('/',(req,res)=>{
    res.render('home')
})
route.post('/add/student',(req,res) => {
    StudentController.addStudent(req,res)
})
route.get('/students',(req,res)=>{
    StudentController.getStudent(req,res)
})

route.get('/student/edit/page/:id',(req,res)=>{
    StudentController.getStudentForEdit(req,res)
})
route.post('/edit/student/:id',(req,res) =>{
    StudentController.editStudent(req,res)
})
route.get('/student/delete/:id',(req,res)=>{
    StudentController.deleteStudent(req,res)
})

module.exports = route