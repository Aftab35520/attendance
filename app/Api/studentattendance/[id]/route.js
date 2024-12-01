import StudentModel from "@/app/dbs/studentDbs";
import { NextResponse } from "next/server";
const mongoose=require("mongoose")
export async function PUT(req,res) {
    mongoose.connect("mongodb://localhost:27017/AttendanceSystem")
    let id=await res.params
    id=id.id
    let status=await req.json()
    const today = new Date();
    const fullDate = `${String(today.getDate()).padStart(2, '0')} ${today.toLocaleString('default', { month: 'short', year: 'numeric' })}`;

    try {
        const data = await StudentModel.updateOne(
            { StudentId: id }, 
            { $push: { Attendance: {fullDate,status} } } 
        );
        console.log(data);
        return NextResponse.json({ success: true, data });
    }catch(err){
        return NextResponse.json(data)
    }

    
}

export async function GET(req,res) {
    const startDate = new Date("23 Nov 2024");
    const today = new Date();
    const endDate = `${String(today.getDate()).padStart(2, '0')} ${today.toLocaleString('default', { month: 'short', year: 'numeric' })}`;

    const diffInMs = new Date(endDate) - startDate;
    let totaldays=diffInMs/ (1000 * 60 * 60 * 24)
    let id=await res.params
    id=id.id
    try{
        let Student=await StudentModel.find({StudentId:id})
        let totalPresent=Student[0]?.Attendance.filter(item => item.status == "present").length;
         return NextResponse.json({totalPresent,totaldays})
    }
    catch(e){
        return NextResponse.json(e)
    }

}
