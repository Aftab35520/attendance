import StudentModel from "@/app/dbs/studentDbs";
import TeacherModel from "@/app/dbs/TeacherDbs";
import { NextResponse } from "next/server";
const mongoose=require("mongoose")

export async function POST(req,res) {
    mongoose.connect("mongodb://localhost:27017/AttendanceSystem")
    const id=await req.json()
    const Teacher=await TeacherModel.findOne({TeacherId:id})
    const Students= await StudentModel.find({StudentClass:Teacher?.ClassAssign})
    return NextResponse.json(Students)
}

