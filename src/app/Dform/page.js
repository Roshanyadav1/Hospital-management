'use client'
import React, { useEffect, useState } from 'react'
import './style.css'
function Form() {

    const data={name:"",email:"",password:""}
    const [inputData, setInputData] = useState(data)
    const [flag,setflag] = useState(false)
    useEffect(()=>{
        console.log('Registered')
    })

    function handleData(e){
        setInputData({...inputData, [e.target.name]:e.target.value})
        console.log(inputData)
    }``
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password ){
            alert('All fields are mandatory')
        }
        else{
            setflag(true)
        }
    }
  return (
    <>
    <pre>{(flag)?<h2 className='ui-define'>Hello {inputData
    .name}, You've Registered successfully</h2>:""}</pre>
     <pre>{(flag)?<h2 className='ui-define'>Email - {inputData
    .email}</h2>:""}</pre>
   <form className='container' onSubmit={handleSubmit}>
     <div className='header'>
        <h1>Rregistration Form</h1>
      </div>
      <div>
        <input type='text' placeholder="Enter your name" name="name" value={inputData.name} onChange={handleData}/>
      </div>
      <div>
        <input type='text' placeholder="Enter your email" name="email"  value={inputData.email} onChange={handleData}/> 
      </div>
      <div>
        <input type='text' placeholder="Enter your passsword" name="password"  value={inputData.password} onChange={handleData}/>
      </div>
      <div>
         <button type='submit'>Submit</button>
      </div>
   </form>
   </>)
}

export default Form
