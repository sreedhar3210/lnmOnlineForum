import { Avatar } from '@material-ui/core'
import React from 'react'
import ArrowUpwardOutlined from '@material-ui/icons/ArrowUpwardOutlined'
import ArrowDownwardOutlined from '@material-ui/icons/ArrowDownwardOutlined'
//import RepatedOutlined from '@material-ui/icons/RepeatOutlined'
import ChatBubbleOutlineOutlined from '@material-ui/icons/ChatBubbleOutlineOutlined'
import { MoreHorizOutlined, ShareOutlined } from '@material-ui/icons'
import '../css/Post.css'

function Post() {
  return (
    <div className='post'>
        <div className='post_info'>
            <Avatar />
            <h5>username</h5>
            <small>Timestamp</small>
        </div>
        <div className='post_body'>
            <div className='post_question'>
                <p> Discussion </p>
                <button className='post_btnAnswer'>
                    Comment
                </button>
            </div>
            <div className='post_answer'>
                <p></p>
            </div>
        </div>
        <div className='post_footer'>
            <div className='post_footerAction'>
                <ArrowUpwardOutlined/>
                <ArrowDownwardOutlined/>
            </div>
            {/* <RepeatOneOutlined/> */}
            <ChatBubbleOutlineOutlined/>
            <div className='post_footerRight'>
                <ShareOutlined/>
                <MoreHorizOutlined/>
            </div>
        </div>
    </div>
  )
}

export default Post
