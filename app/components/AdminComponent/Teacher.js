'use client'
import { useState } from "react"
export default function Teacher(prop) {
  const [data,setdata]=useState({
    TeacherName:"",
    TeacherId:0,
    ClassAssign:0
  })

  const changeHandle=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }
    return (
      <div className="p-6">
          <form className={`w-[100%]  flex flex-col`} onSubmit={(e)=>{e.preventDefault(),prop.formSubmit("Teacher",data)}}>
             <label>Add Teacher</label>
             <input type="text" placeholder="Teacher Name" className="p-2 mt-2 mb-2 outline-none  border-2" name="TeacherName" onChange={changeHandle}/>
             <input type="number" placeholder="Teacher Id" className="p-2 mt-2 mb-2 outline-none  border-2" name="TeacherId" onChange={changeHandle}/>
             <input type="Number" placeholder="Class Teacher / class Assigned" className="p-2 mt-2 mb-2 outline-none  border-2" name="ClassAssign" onChange={changeHandle}/>
             <input type="Submit"  className="p-2 mt-2 mb-2 outline-none  border-2 bg-slate-700 cursor-pointer text-white"/>
          </form>
      </div>
    )
  }
  