import React, { useState } from 'react'
import HOC from '../layout/HOC'

const AdminMeal = () => {

    const [ data , setData ] = useState([])

    const fetchData = async () => {
        try{
            
        }catch(e) { 
            console.log(e)
        }
    }

  return (
    <>
    <div>
        <p style={{fontSize : '20px' , color : 'black'}}>Admin Meals</p>
    </div>
    </>
  )
}

export default HOC(AdminMeal)