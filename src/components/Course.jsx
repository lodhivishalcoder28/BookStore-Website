import React from 'react'
import Cards from '../components/Cards'
import { Link } from 'react-router-dom'
import list from "../../public/list.json"


const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl font-bold md:text-4xl'>We are delighted to have you <span className='text-pink-500'>HERE :</span>  </h1>
        <p className='mt-12 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus magnam voluptatem, nulla tempore omnis eius ipsam fuga vel officia nam sunt, facilis consectetur consequuntur repellat.</p>
        <Link to="/">
       
        <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 duration-300 mt-7'>Back</button>
         </Link>
      </div>
      <div className='grid mt-12 grid-col-1 md:grid-cols-4 '>
        {
          list.map((item)=>(
            <Cards key={item.id} item={item}/>

          ))
        }

      </div>


    </div>

    
    </>
  )
}

export default Course
