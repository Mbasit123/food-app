import React from 'react'
import { Link } from 'react-router-dom'


const NameCard = ({id,title,picture}) => {
  return (
    <Link to={"/Food/cuisine/information/"+id}>
       <h1>{id}</h1>
        <h1>{title}</h1>
        <img src={picture}/> 
    </Link>
     
    
  )
}

export default NameCard