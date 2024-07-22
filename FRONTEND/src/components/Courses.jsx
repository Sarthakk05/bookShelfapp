import React, { useEffect, useState } from 'react'
import Cards from './Cards'

import axios from "axios"
import {Link}from "react-router-dom"

function Courses() {
  const[book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
      const res=  await axios.get("http://localhost:4001/book");
      console.log(res.data)
      setBook(res.data)

      } catch (error) {
        
      }
    }
    getBook();
  },[]);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto p-4 md:px-20 px-4 ' >
        <div className='mt-28 items-center justify-center text-center '>
            <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you 
               <span className='text-purple-500'> Here!</span></h1>
               <p className="mt-12">
               Welcome to bookShelf, where we offer a range of courses designed for book lovers, aspiring authors,
                and literature enthusiasts. Our courses cover everything from creative writing and literary analysis to
                 book publishing and marketing. Join us to deepen your love for books and enhance your skills.
               </p>
               <Link to="/">
               <button className='mt-6 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700 dark:text-black '>Back</button>
        
               </Link>
               </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'> 
          {
            book.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
          }
        </div>
    </div>
    </>
  )
}

export default Courses
