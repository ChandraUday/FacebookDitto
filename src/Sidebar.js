import React from 'react'
import Sidebaroptions from './Sidebaroptions'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./css/sidebar.css"
import { useStateValue } from './StateProvider';

function Sidebar() {

  const [{user},dispatch]=useStateValue();
  return (
    <div className="sidebar">
           <Sidebaroptions src={user.photoURL} title={user.displayName}/>
           <Sidebaroptions src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCMyhpE4IwxdYYjQTJJIN3WX4aK0v9a5Q2w&usqp=CAU" alt="" title="Covid 19 world news"/>
           <Sidebaroptions src="https://img.freepik.com/free-vector/hand-drawn-friends-logo-design_23-2149577868.jpg?w=2000" alt="" title="Friends"/>     
           <Sidebaroptions src="https://us.123rf.com/450wm/artbandung99/artbandung992103/artbandung99210300249/169605162-star-people-logo-template.jpg?ver=6" alt="" title="groups"/>
           <Sidebaroptions src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHcIBnbdVT-kYlL3_w6V_9BTJyLmrQd9GlQ&usqp=CAU" alt="" title="Events"/>
           <Sidebaroptions src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8CM-CAQIgxXLNadwYFDp-HOi6wAmn0cTccQ&usqp=CAU" alt="" title="Views"/>
           <Sidebaroptions Icon={ ArrowDropDownIcon} title="see more"/>
    </div>
  )
}

export default Sidebar
