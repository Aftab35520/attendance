"use client"
import { useState } from "react"

export default function StudentPanel() {
  const[Attendance,setAttendance]=useState(
    {totalPresent: 0, totaldays: 0}
  )
  const [id,setid]=useState(0)
  const Studentdata=async(e)=>{
    e.preventDefault()
    await fetch(`http://localhost:3000/Api/studentattendance/${id}`,{
      method:"GET",
      headers:{
        'content-type':'application/json'
      }
    })
    .then(async res=>await res.json())
    .then(data=>setAttendance(data))
    .catch(err=>err)
  }
  return (
    <div className="w-full h-dvh">
      {
        Attendance.totaldays==0?
        <form className=" w-full h-full flex justify-center items-center" onSubmit={Studentdata}>
            <input type="number" placeholder="Enter Student Id " className="outline-none border-2 p-3 border-black" onChange={(e)=>setid(e.target.value)}/>
            <input type="submit"  className="outline-none border-2  cursor-pointer p-3 border-black border-l-0"/>
        </form>
        :
        <div className=" w-full h-full flex justify-center items-center">
        <p>Student Attendance is </p>
        <p className="ml-4"> class Attend {Attendance.totalPresent} out of {Attendance.totaldays} </p>
    </div>
      }
         
       
        
    </div>
  )
}
