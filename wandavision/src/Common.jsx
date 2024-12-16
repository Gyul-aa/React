import React from 'react'
import './common.css'
function Common() {
  const bgStyle = {
    backgroundColor : 'rgba(0,0,0,.8)',
    width: '100vw',
    height: '100vh',
    zIndex: '-1',
    position: 'fixed',
    left: 0,
    top:0
  }
  const tvStyle = {
    background : 'url("./images/tv-effect.gif") center no-repeat',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    opacity: '.7',
    zIndex: '-2',
    position: 'fixed',
    left: 0,
    top: 0
  }
  return (
    <div className='gb'>
      <div className="gb_color" style={bgStyle}></div>
      <div className="tv_effect" style={tvStyle}></div>
    </div>
  )
}

export default Common