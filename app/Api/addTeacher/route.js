import TeacherModel from '@/app/dbs/TeacherDbs'
import { NextResponse } from 'next/server'
const mongoose=require("mongoose")

export async function POST(req,res) {
    mongoose.connect("mongodb://localhost:27017/AttendanceSystem")
    const Studentdata=await req.json()
    let {TeacherName,TeacherId,ClassAssign}=Studentdata
    let Data=new TeacherModel
    Data.TeacherName=TeacherName
    Data.TeacherId=TeacherId
    Data.ClassAssign=ClassAssign
    try{
        await Data.save()
        return NextResponse.json({Result:'Data Saved'})
    }
    catch(err){
        return NextResponse.json({Result:err})
    }
}

export async function GET(req,res) {
    const data=await TeacherModel.find({})
    return NextResponse.json(data)
}
