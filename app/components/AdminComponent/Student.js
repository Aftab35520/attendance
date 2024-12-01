'use client'
import { useState } from "react"
export default function Student(prop) {
  const [data,setdata]=useState({
    StudentName:"",
    StudentId:0,
    FatherName:"",
    StudentClass:0,
    StudentReligion:""
  })

  const changeHandle=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }
    return (
      <div className="p-6">
          <form className={`w-[100%] flex flex-col`} onSubmit={(e)=>{e.preventDefault(),prop.formSubmit("Student",data)}}>
             <p className="text-[30px]">Add Student</p>
             <input type="text" placeholder="Student Name" className="p-2 mt-2 mb-2 outline-none  border-2" name="StudentName" onChange={changeHandle}/>
             <input type="number" placeholder="Student Id" className="p-2 mt-2 mb-2 outline-none  border-2" name="StudentId"onChange={changeHandle}/>
             <input type="text" placeholder="Student Father Name" className="p-2 mt-2 mb-2 outline-none  border-2" name="FatherName"onChange={changeHandle}/>
             <input type="number" placeholder="Student Class" className="p-2 mt-2 mb-2 outline-none  border-2" name="StudentClass"onChange={changeHandle}/>
             <input type="text" placeholder="Religion" className="p-2 mt-2 mb-2 outline-none  border-2" name="StudentReligion"onChange={changeHandle}/>
             <input type="Submit"  className="p-2 mt-2 mb-2 outline-none  border-2 bg-slate-700 cursor-pointer text-white"/>
          </form>
      </div>
    )
  }
  