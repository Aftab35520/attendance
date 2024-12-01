"use client"
import Class from "./AdminComponent/Class";
import Student from "./AdminComponent/Student";
import Teacher from "./AdminComponent/Teacher";

export default function Admin() {
  const formSubmit = async(Name, data) => {
      if (Name == "Student") {
      if(
        data.StudentName!=="" &&
        data.StudentId!=0 &&
        data.StudentReligion!="" &&
        data.StudentClass!=0 &&
        data.FatherName!==""

      ){
        await fetch("http://localhost:3000/Api/addclass",{
          method:"POST",
          body:JSON.stringify(data),
          headers:{
            'content-type':'application/json'
          }
        })
        .then(async res=>await res.json())
        .then(data=>data)
        .catch(err=>console.log(err))
      }
    }
    else if (Name == "Teacher") {
      if(
        data.TeacherName!=="" &&
        data.TeacherId!=0 &&
        data.ClassAssign!=""

      ){
        await fetch("http://localhost:3000/Api/addTeacher",{
          method:"POST",
          body:JSON.stringify(data),
          headers:{
            'content-type':'application/json'
          }
        })
        .then(async res=>await res.json())
        .then(data=>data)
        .catch(err=>console.log(err))
      }
    }
  }
  return (
    <div className="p-6">
      <Class formSubmit={formSubmit} />
      <Teacher formSubmit={formSubmit} />
      <Student formSubmit={formSubmit} />
    </div>
  )
}
