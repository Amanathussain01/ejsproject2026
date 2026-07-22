const Student = require('../models/Student')

async function addStudent(req,res) {
    try{
        console.log(req.body)
        const { rollNo, aadharNo } = req.body;
        const student = new Student(req.body)
        await student.save();
        res.render("addStudentSuccess")
    }
    catch (err){
        console.log(err)
    }
}
 const  getStudent = async (req,res) =>{
    try{
        let students = await Student.find({});
        res.render('studentlist',{
            students:students
        })
    }
    catch(err){
        console.log(err)
    }
}
async function getStudentForEdit(req,res) {
    try {
        let id = req.params.id;
        let student = await Student.findOne({_id : id})
        // console.log(student)
        res.render("studentedit",{
            student:student
        })
    } catch (err) {
        console.log(err)
    }
}
async function editStudent(req,res){
    try {
        let id = req.params.id;
        console.log(req.body)
        let student = await Student.findOne({_id:id})
        student.rollNo = req.body.rollNo;
        student.studentName = req.body.studentName;
        student.fatherName = req.body.fatherName;
        student.aadharCardNo = req.body.aadharCardNo;
        student.mobileNo = req.body.mobileNo;
        await student.save();
        let students = await Student.find({})
        res.render("studentlist",{
            students:students
        })
    } catch (err) {
        console.log(err)
    }
}

async function deleteStudent(req,res) {
    try {
        let id = req.params.id;
        await Student.deleteOne({_id:id})
        let students = await Student.find({})
        res.render("studentlist",{
            students:students
    })
}   catch (err) {
        console.log(err)
    }
}

module.exports ={
    addStudent,
    getStudent,
    getStudentForEdit,
    editStudent,
    deleteStudent
}