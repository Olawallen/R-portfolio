import React from 'react'
import "./main.css"

const Main = () => {
  return (
    <div className='main'>
        <div className='firstt'>
            <h1>Hello, i am</h1> 
            <h3>Olawale Oyewunmi</h3>
            <h1>software developer</h1>
        </div>
        <div className='second'>
            <img src="./assets/profilephoto.jpg" alt="" className='myimage'/>
        </div>
    </div>
  )
}

export default Main