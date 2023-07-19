import React from 'react'
import "./css/storyreel.css"
import { Avatar } from '@mui/material'

function Storyreel() {
  return (
    <div className='storyReel'>
           <div className='story' style={{backgroundImage:`url('https://i.pinimg.com/736x/45/74/50/4574508d575afa7c11128c45da57a1a5.jpg')`}}>
               <Avatar />
               <h4>Chandra uday  </h4>
           </div>

           <div className='story' style={{backgroundImage:`url('https://i.pinimg.com/736x/90/36/9f/90369ff207a44eb772af864db67e1cb4.jpg')`}}>
               <Avatar />
               <h4>Swati Sharma</h4>
           </div>

           <div className='story' style={{backgroundImage:`url('https://img.freepik.com/free-photo/merry-christmas-red-background_1361-3542.jpg?w=2000')`}}>
               <Avatar />
               <h4>Rahul yadav</h4>
           </div>

           <div className='story' style={{backgroundImage:`url('https://www.mmppicture.co.in/wp-content/uploads/2023/02/CB-Background-155-864x1080.jpg')`}}>
               <Avatar />
               <h4>Praveen Kumar</h4>
           </div>

           <div className='story' style={{backgroundImage:`url('https://i.pinimg.com/564x/e7/0c/fe/e70cfeccab215facdbb6cd301fa478f8.jpg')`}}>
               <Avatar />
               <h4>Smriti Sharma</h4>
           </div>

          
    </div>
  )
}

export default Storyreel
