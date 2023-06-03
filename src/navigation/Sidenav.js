import React from 'react'
import "./Sidenav.css"
import HomeIcon from '@mui/icons-material/Home';

function Sidenav() {
  return (
    <div className='sidenav'>
    <img className='sidenav__logo' src="https://www.pngkey.com/png/detail/1-14166_png-icon-px-instagram-line-icon-png.png alt='instagram-logo'"></img>

<div className='sidenav__buttons'>
    <div className='side__button'>
        {/*Icons */}
        <span><HomeIcon /></span>
    </div>
</div>
    </div>
  )
}

export default Sidenav