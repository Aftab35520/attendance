const mongoose=require("mongoose")
const { default: Teacher } = require("../components/AdminComponent/Teacher")

const TeacherSchema=new mongoose.Schema({
    TeacherName:String,
    TeacherId:Number,
    ClassAssign:Number
})

const TeacherModel= mongoose.models.Teacherdata || mongoose.model("Teacherdata",TeacherSchema)
module.exports=TeacherModel