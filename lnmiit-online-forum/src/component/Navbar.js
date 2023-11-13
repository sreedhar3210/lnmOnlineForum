import React from 'react';
import '../css/Navbar.css';
import HomeIcon from '@material-ui/icons/Home'
import FeautredPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined'
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined'
import NotificationOutlinedIcon from '@material-ui/icons/NotificationsOutlined'
import SearchIcon from '@material-ui/icons/Search'
import Avatar from '@material-ui/core/Avatar'
import LanguageIcon from '@material-ui/icons/Language'
import Button from '@material-ui/core/Button';

//while importing if there is a default export from that location
//then there is no need to use curly braces 
//else if there are multiple exports from that location then
//curly braces should be used.

function Navbar() {
  return (
    <div className='qHeader'>
        <div className='qHeader_logo'>
            <img src='https://s2.gifyu.com/images/Online-forum.gif' alt=''/>
        </div>
        <div className='qHeader_icons'>
            <div className='qHeader_icon'>
                <HomeIcon/>
            </div>

            <div className='qHeader_icon'>
                <FeautredPlayListOutlinedIcon/>
            </div>

            <div className='qHeader_icon'>
                <AssignmentTurnedInOutlinedIcon/>
            </div>

            <div className='qHeader_icon'>
                <PeopleAltOutlinedIcon/>
            </div>

            <div className='qHeader_icon'>
                <NotificationOutlinedIcon/>
            </div>
        </div>
        <div className='qHeader_input'>
            <SearchIcon/>
            <input type = 'text' placeholder = 'Search'/>
        </div>
        <div className='qHeader_Rem'>
            <div className='qHeader_avatar'>
                <Avatar/>
            </div>
            <LanguageIcon/>
            <Button>Add Post</Button>
        </div>
    </div>
  )
}

export default Navbar
