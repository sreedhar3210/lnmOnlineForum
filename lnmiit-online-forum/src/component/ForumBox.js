import React from 'react'
import '../css/ForumBox.css'
import { Avatar } from '@material-ui/core'

function ForumBox() {
  return (
    <div className='quoraBox'>
        <div className='quoraBox_info'>
            <Avatar />
            <h5>Username</h5>
        </div>
        <div className='quoraBox_quora'>
            <p>Start a discussion</p>
        </div>
    </div>
  )
}

export default ForumBox
