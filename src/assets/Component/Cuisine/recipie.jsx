import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Recipie = () => {
    const [recipie,setRecipie]=useState('')
    const [ingredients,setIngredients]=useState([])
    const [instructions, setInstructions] = useState([])
    const params=useParams();
    const getrecipie=async()=>{

       const Data=await fetch (`https://api.spoonacular.com/recipes/${params.recipie}/information?apiKey=e5c755bf536446a085e5d6f0f5e50243`)
       const data=await Data.json()
        setInstructions(data.instructions.split("."))
    //    console.log(data)
       setRecipie(data)
       setIngredients(data.extendedIngredients)
    }

    useEffect(()=>{
        getrecipie();
    },[])
  return (
    <div className='min-h-screen w-screen bg-red-400'>
          <h1 className='font-bold text-center text-3xl'>{recipie.title}</h1>
          <div className='flex justify-center items-center py-10'>
            <div>
<img src={recipie.image}/>
            </div>
          </div>
          <div className='min-h-[400px]  flex bg-amber-600'>
            <div className='max-w-xl p-5 flex-1 bg-red-200'>
                <h1 className='font-bold text-5xl'>Instructions</h1>

              {instructions.map((instruction, index)=>(
                <li className='list-none'>{index}-{instruction}</li>
              ))}
                
            </div>
            <div className='flex-1 bg-green-200'> 
                <h1 className='font-bold text-5xl'>Ingredients</h1>
            {
                ingredients.map((ingredients,index)=>(
                    <h1>{index}-{ingredients.name}</h1>
                ))
            }

            </div>
          </div>
    </div>
  )
}

export default Recipie