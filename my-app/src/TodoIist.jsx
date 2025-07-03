import { useState } from "react";

function Todolist(){

    let[task,setTask]=useState('')
    let[list,setList]=useState([])

    let addTask=()=>{
        if(task.trim() !==''){
            setList([...list,task])
         setTask('')
        }
    }
    let deleteTask=(index)=>{
    let newlist=list.filter((_,ind)=>ind !== index)
    setList(newlist)
    }
    return(
        <div>
            <input type="text"
            placeholder="Enter task"
            value={task} 
            onChange={(e)=>setTask(e.target.value)}/>
            <button onClick={addTask}>Add</button>
            {list.map((item,index)=>(
                <li key={index}>{item}
            <button onClick={()=>deleteTask(index)}>Delete</button>
            </li>
            ))}

        </div>
    )
}
export default Todolist;