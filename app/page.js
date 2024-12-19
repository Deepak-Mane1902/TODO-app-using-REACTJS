'use client'
import React, { useState } from 'react'

const page = () => {

    const [title,settitle] = useState("")
    const [desc,setdesc] = useState("")
    const [mainTask,setmainTask] = useState([])
    const submitHandler =(e)=>{
      e.preventDefault();
      setmainTask([...mainTask, {title,desc}]);
      setdesc("")
      settitle("")
      console.log(mainTask);
    }
    const deleteHandler =(i)=>{
      let copyTask = [...mainTask]
      copyTask.splice(i,1);
      setmainTask(copyTask)
    }

    let renderTask = <h2 className='text-center'>No Task Available</h2>
  if(mainTask.length>0){
    renderTask=mainTask.map((t,i)=>{
      return (
        <li key={i} className='flex justify-between pl-25 text-[2vw] mb-[5vw]'>
        <div className="flex flex-row m-[20px] justify-between">
        <h5 className='text-[2vw] font-bold ml-[10vw] '>{t.title}</h5>
        <p className='text-[2vw] font-bold ml-[40vw]'>{t.desc}</p>
      </div>
        <button className='mr-[17vw] bg-blue-300 pl-[2vw] pr-[2vw] hover:bg-blue-600 p-[10px]'
        onClick={()=>{
          deleteHandler(i)
        }}
        >Delete</button>
        </li>
      );
    });
  }

  

  return (
    <>
    <h1 className='bg-black p-5 text-[3vw] font-bold text-center text-white'>My Todo List</h1>
    <form onSubmit={submitHandler}>
      <input placeholder='Enter the name : ' className='
      mt-[5vw] w-[30vw] h-[5vw]
      ml-[8vw] text-2xl pl-[20px]  text-left border-4 rounded border-red-700'
      value={title}
      onChange={(e)=>{
        e.preventDefault();
        settitle(e.target.value)
      }}
      />

      <input placeholder='Enter the name : ' className='
      mt-[5vw] w-[30vw] h-[5vw]
      ml-[1vw] text-2xl pl-[20px]  text-left border-4 rounded border-red-700'
      value={desc}
      onChange={(e)=>{
        e.preventDefault();
        setdesc(e.target.value)
      }}
      />

      <button className='bg-red-400 p-[1.8vw] ml-[2vw] rounded-[5px] w-[10vw] text-[1.5vw] font-bold hover:bg-[#ff3122] hover:border-black border-4'
      
      >Click me</button>

    </form>
    <hr></hr>
    <div className='bg-slate-200 p-8'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page