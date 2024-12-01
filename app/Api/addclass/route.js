import StudentModel from '@/app/dbs/studentDbs'
import { NextResponse } from 'next/server'
const mongoose=require("mongoose")

export async function POST(req,res) {
    mongoose.connect("mongodb://localhost:27017/AttendanceSystem")
    const Studentdata=await req.json()
    let {StudentName,StudentId,FatherName,StudentClass,StudentReligion}=Studentdata
    let Data=new StudentModel
    Data.StudentName=StudentName
    Data.StudentId=StudentId
    Data.StudentClass=StudentClass
    Data.FatherName=FatherName
    Data.StudentReligion=StudentReligion
    Data.Attendance=[]
    try{
        await Data.save()
        return NextResponse.json({Result:'Data Saved'})
    }
    catch(err){
        return NextResponse.json({Result:err})
    }
}

export async function GET(req,res) {
    const data=await StudentModel.find({})
    return NextResponse.json(data)
}
