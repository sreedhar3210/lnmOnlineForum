import React from 'react'
import '../css/Feed.css'
import ForumBox from './ForumBox'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
        <ForumBox />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default Feed
