import React, { useState } from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions'
import Post from './posts/Post'

function Timeline() {
  const [posts, setPosts] = useState ([
    {
      user: "pres_",
      postImage: "",
      likes: 12,
      timestamp: "2d",
    },
  ]);
  return (
    <div className='timeline'>
    <div className='timeline__left'>
      <div className='timeline__posts'>
    <Post />
    <Post />
    <Post />

      </div>
    </div>
    <div className='timeline__right'>
        <Suggestions />
    </div>
    </div>
  )
}

export default Timeline