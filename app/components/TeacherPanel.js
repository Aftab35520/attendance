'use client'
import { useState } from "react";
import StudentForAttendance from "./TeacherComponent/StudentForAttendance";

export default function TeacherPanel() {
    const [data,setdata]=useState([])
    
    const [id,setid]=useState(0)
    
    const DataGet=async(e)=>{
        e.preventDefault()
        await fetch("http://localhost:3000/Api/studentattendance",{
            method:"POST",
            body:JSON.stringify(id),
            headers:{
                'content-type':'application/json'
            }
        })
        .then(async res=>res.json())
        .then(data=>{setdata(data)})
        .catch(err=>err)
    }
  return (
    <div className="w-full h-dvh  p-6">
        {
        data.length==0?
            <form className=" w-full h-full flex justify-center items-center" onSubmit={DataGet}>
            <input type="number" placeholder="Enter Teacher Id " className="outline-none border-2 p-3 border-black" onChange={(e)=>setid(e.target.value)}/>
            <input type="submit"  className="outline-none border-2  cursor-pointer p-3 border-black border-l-0"/>
            </form>
        :
        <div>
        <div className="flex justify-between text-5xl mb-8" >
        <p>Teacher Name</p>
        <p>Class: {data[0]?.StudentClass}</p>
        </div>

        <div className="grid grid-cols-5 text-2xl mb-3">
         <p>S.No</p>
         <p>Name</p>
         <p>Id</p>
         <p>Class</p>
         <p>Attendance</p>
         </div>
         {
             data.map((data,index)=>{
                 return(
                     <StudentForAttendance key={index} sno={index+1} id={data.StudentId} name={data.StudentName} Sclass={data.StudentClass} status={data?.Attendance[data.Attendance.length-1]?.status} attendanced={data?.Attendance[data.Attendance.length-1]?.fullDate}/>
                 )
             })
         }
        <div className="w-full grid grid-cols-5">
         <p></p><p></p><p></p><p></p>
        </div>
        </div>

        }


    </div>
  )
}
