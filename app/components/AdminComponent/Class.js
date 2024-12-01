'use client'
import { useState } from "react"

export default function Class(prop) {
  const [data,setdata]=useState()
    return (
      <div className="p-6">
          <h2 className="text-xl">Admin Panel</h2>
          <form className={`w-[100%]  flex flex-col`} onSubmit={(e)=>{e.preventDefault(),prop.formSubmit("Class",data)}}>
             <label>Add Class</label>
             <input type="number" placeholder="Class " className="p-2 mt-2 mb-2 outline-none  border-2" onChange={(e)=>setdata(e.target.value)}/>
             <input type="Submit"  className="p-2 mt-2 mb-2 outline-none  border-2 bg-slate-700 cursor-pointer text-white"/>
          </form>
      </div>
    )
  }
  