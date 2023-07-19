import React from 'react'
import "./css/rightsidebar.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';


function Rightsidebar() {
  return (
    <div className='widget'>
          <div className='widget_header'>
                <div className='widget_headerLeft'>
                      <h4>Your Pages</h4>
                </div>
                <MoreHorizIcon/>
          </div>

          <div className='widget_body'>
               <div className='widget_bodyOptions m110'>
                    <Avatar src="https://images.news18.com/ibnlive/uploads/2022/04/virat-kohli-ipl-2022-165038610816x9.jpg"/>
                    <h4>Virat Pashya</h4>
               </div>

               <div className='widget_bodyOptions'>
               <NotificationsNoneIcon/>
                    <p>3 Notifications</p>
               </div>

               <div className='widget_bodyOptions'>
                    <VolumeUpIcon/>
                    <p>Create promotions</p>
               </div>
          </div>

          <hr/><br/>

          <div className='widget_header'>
                <div className='widget_headerLeft'>
                      <h4>Contacts</h4>
                </div>
                <div className='widget_headerRight'>
                      <VideoCallIcon/>
                      <SearchIcon/>
                      <MoreHorizIcon/>
                </div>

          </div>

          <div className='widget_body'>
               <div className='widget_bodyOptions m110'>
                    <Avatar src="https://images.news18.com/ibnlive/uploads/2022/04/virat-kohli-ipl-2022-165038610816x9.jpg"/>
                    <h4>Chandra uday</h4>
               </div>
          </div>

          <div className='widget_body'>
               <div className='widget_bodyOptions m110'>
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhF7uYdzGxjfLnbvKlrTrcnpfv6ldAhjwvA&usqp=CAU"/>
                    <h4>Rahul Yadav</h4>
               </div>
          </div>

          <div className='widget_body'>
               <div className='widget_bodyOptions m110'>
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDC0WS0N8QWbEhqv2rzOw0JHXalSw8FbzGQ&usqp=CAU"/>
                    <h4>Preeti kumari</h4>
               </div>
          </div>
    </div>
  )
}

export default Rightsidebar
