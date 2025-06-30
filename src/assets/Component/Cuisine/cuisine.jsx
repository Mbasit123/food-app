import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NameCard from './NameCard'

const Cuisine = () => {
    const [recipie,setRecipie]=useState([])
    const params=useParams()
    const getrecipie=async()=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=e5c755bf536446a085e5d6f0f5e50243&cuisine=${params.cuisine}&number=20`)
        const Data=await data.json()
        // console.log(Data.results)
        setRecipie(Data.results)
    }
    useEffect(()=>{
        getrecipie()
    },[])
  return (
    <div className='grid grid-cols-4'>
        <h1>{params.Cuisine}</h1>
        {recipie.length===0 &&<h1>data loading</h1>}
        {
         recipie.map((data)=>(
                <NameCard key={data.id} id={data.id} title={data.title} picture={data.image}/>
                
            ))
        }
       {/* {recipie.length} */}
    </div>
  )
}

export default Cuisine