import { useRef } from "react";

export default function StudentForAttendance({sno,name,id,Sclass,attendanced,status}) {
  const today = new Date();
  const todatdate = `${String(today.getDate()).padStart(2, '0')} ${today.toLocaleString('default', { month: 'short', year: 'numeric' })}`;
  const ref=useRef()
  const attendance=async(id,statuss)=>{
    ref.current.style.pointerEvents="none"
    await fetch(`http://localhost:3000/Api/studentattendance/${id}`,{
      method:"PUT",
      body:JSON.stringify(statuss),
      headers:{
        'content-type':'application/json'
      }
    })
    .then(async res=>await res.json())
    .then(data=>alert(data))
    .catch(err=>err)
  }
  return (
    <div className="grid grid-cols-5 text-xl mb-3 ">
    <p>{sno}</p>
    <p>{name}</p>
    <p>{id}</p>
    <p>{Sclass}</p>
    <div className={`flex gap-2 ${attendanced==todatdate?"pointer-events-none":''} `} ref={ref}>
       <p className={` p-1 cursor-pointer  rounded-md  ${attendanced==todatdate && status=="present" ?"bg-[blue] text-white":'bg-white text-black'}`} onClick={(e)=>{attendance(id,"present"),e.currentTarget.style.backgroundColor="blue",e.currentTarget.style.color="white"}}>Present</p>
       <p className= {`p-1 cursor-pointer  rounded-md ${attendanced==todatdate && status=="absent"?"bg-[red] text-white":'bg-white text-black'}`} onClick={(e)=>{attendance(id,"absent"),e.currentTarget.style.backgroundColor="red",e.currentTarget.style.color="white"}}>Absent</p>      
    </div>
    </div>
  )
}
