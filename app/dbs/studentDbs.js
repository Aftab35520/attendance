const mongoose=require("mongoose")

const StudentSchema=new mongoose.Schema({
    StudentName:String,
    StudentId:Number,
    StudentClass:Number,
    FatherName:String,
    StudentReligion:String,
    Attendance:Array
})

const StudentModel= mongoose.models.StudentData || mongoose.model("StudentData",StudentSchema)

module.exports=StudentModel