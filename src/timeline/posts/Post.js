import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import { BookmarkBorder, ChatBubbleOutline, Favorite, FavoriteBorder, MoreHoriz, Telegram } from '@mui/icons-material'

function Post() {
  return (
    <div className='post'>
        <div className='post__header'>
            <div className='post__headerAuthor'>
            <Avatar>P</Avatar>
            pres_ . <span>12h</span>
            </div>
        <MoreHoriz />
        </div>
        <div className='post__image'>
        <img src='https://images.pexels.com/photos/4099817/pexels-photo-4099817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='post-image1'></img>
        </div>
        <div className='post__footer'>
        <div className='post__footerIcons'>
            <div className='post__IconsMain'>
                <FavoriteBorder className='postIcon'/>
                <ChatBubbleOutline className='postIcon'/>
                <Telegram className='postIcon'/>
            </div>
            <div className='post__IconSave'>
                <BookmarkBorder className='postIcon' />
            </div>
        </div>
            Liked by 21 People.
        </div>

    </div>
  )
}

export default Post