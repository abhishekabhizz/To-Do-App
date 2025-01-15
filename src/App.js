import { useState } from "react";

export default function App() {
  const [todoList, settodoList] = useState([
{id :1 , taskName : "Learn Mernstack", iscomplete : false},
{id :2 , taskName : "Attending oflineclass", iscomplete : false},
{id :3 , taskName : "Doing projects", iscomplete : false},
{id :4 , taskName : "Push to github & netlify", iscomplete : false}
 ]);
 const [newTask, setnewTask] = useState("");
 const addTask =(e)=>{
  e.preventDefault()
 if (!newTask) {
  alert("Enter the Task")
 }
 else{
  let num = todoList.lenghth===0?1:todoList[todoList.length-1].id+1
  let newEntry = {id:num,taskName:newTask,iscomplete:false}
  settodoList([...todoList,newEntry])
  setnewTask("")
 }
}
  return (
    <div className=" h-screen flex flex-col items-center pt-28 bg-gradient-to-r from-blue-900 from-10% via-violet-500 via-30% to-yellow-400 to-90%">
      <h1 className="text-3xl font-bold">TO-Do</h1>
      <form className="flex gap-5 mt-10">
        <input value={newTask} onChange={(e)=>{setnewTask(e.target.value)}} className=" border-2 border-white px-4 py-2  outline-none rounded-md " type="text" placeholder="Enter the Task" />
        <button onClick={addTask} className="p-2 border-2 border-white rounded-md font-semibold bg-white text-sm">
          Add Task
        </button>
      </form>
      <div className="mt-2">
        {
         todoList.map((item) => {
          return (
            <div key={item.id} className="font-medium font-serif">
              <h1>{item.id} {item.taskName}</h1>
            </div>
          )
         })
        }
      </div>
    </div> 
  )
}