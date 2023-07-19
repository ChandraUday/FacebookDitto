import { Avatar } from '@mui/material'
import React from 'react'
import "./css/sidebaroptions.css"

function Sidebaroptions({src,Icon,title}) {
  return (
    <div className='sidebar_row'>
         {src && <Avatar src={src}/>}
         {Icon && <Icon/>}
         <p>{title}</p>
    </div>
  )
}

export default Sidebaroptions
