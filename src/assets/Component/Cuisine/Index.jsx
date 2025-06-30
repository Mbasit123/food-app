import React from 'react'
import data from './data.js'
import { Link } from 'react-router-dom'

const Data = () => {
  return (
    <div className='grid grid-cols-4 gap-10 '>
{
  data.map((Data)=>(
    <Link key={Data.id} to={"/Food/cuisine"+Data.to} className='h-26 w-56  bg-amber-400'>{Data.name}</Link>
  ))
}
    </div>
  )
}

export default Data