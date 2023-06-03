import React, { useState } from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions'
import Post from './posts/Post'

function Timeline() {
  const [posts, setPosts] = useState ([
    {
      user: "pres_",
      postImage: "https://images.pexels.com/photos/4099817/pexels-photo-4099817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: 120,
      timestamp: "2d",
    },
    {
      user: "ElonMusk01",
      postImage: "https://z-p3-scontent.fmba2-1.fna.fbcdn.net/v/t39.30808-6/279346439_10166704120780405_8516815278991151159_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=2c4854&_nc_eui2=AeEiaf3tZ5QwyKy7oWb81a4xzUFMg7OzdyLNQUyDs7N3Ijy-zolkKCQY5VyQGvKMm_HvJ9VH5mabGlyVHAB_SK2m&_nc_ohc=cJDmdNUx_lcAX9sQHoH&_nc_ht=z-p3-scontent.fmba2-1.fna&oh=00_AfB3fGcC2s2MbZr6FqReRgbaVgE85_Xm83LYkLaw-T0LXw&oe=64819388",
      likes: 900,
      timestamp: "12h",
    },
    {
      user: "RiggyG",
      postImage: "https://technext24.com/wp-content/uploads/2023/01/Starlink-in-Kenya.jpeg",
      likes: 12,
      timestamp: "2d",
    },
  ]);
  return (
    <div className='timeline'>
    <div className='timeline__left'>
      <div className='timeline__posts'>
    
    {posts.map(post => (
      <Post user={post.user} postImage={post.postImage} like={post.likes} timestamp={post.timestamp} />
    ))}

      </div>
    </div>
    <div className='timeline__right'>
        <Suggestions />
    </div>
    </div>
  )
}

export default Timeline