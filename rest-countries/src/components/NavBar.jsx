import React,{useState,useEffect} from 'react'
import {BsMoon} from 'react-icons/bs'
const  NavBar = ({on, handleButton}) => {

  return (
    <div className={`p-4 ${on ? 'bg-slate-800 text-white' : 'bg-white'} cursor-pointer shadow-2xl shadow-slate-50  flex justify-between items-center text-2xl`}>
        <h1 className='font-bold'>Where in the world?</h1>
        <div className='flex items-center gap-2'>
            <span onClick={handleButton}><BsMoon/></span>
            <span>Dark Mode</span>
        </div>
    </div>
  )
}

export default  NavBar