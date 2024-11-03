import React from 'react'
import Cards from './Cards.jsx'
import list from "../../public/list.json"
import { Link } from 'react-router-dom'

const Course = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
          <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
            <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eligendi sit placeat eius alias? Hic, nisi recusandae dolorem quidem vitae, ipsa tempore dignissimos voluptatibus enim eveniet possimus repudiandae commodi blanditiis perferendis aut! Id eum a unde iure, saepe placeat ipsum! Beatae deleniti fugit labore provident molestias reiciendis quibusdam veniam et.</p>
            <Link to={'/'}>
              <button className='mt-6 text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
            </Link>
          </div>
          <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
            {
              list.map((item) => (
                <Cards item={item} key={item.id}></Cards>
              ))
            }
          </div>
      </div>  
    </>
  )
}

export default Course
