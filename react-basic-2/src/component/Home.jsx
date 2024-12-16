import React from 'react'
import Logo from '../images/PenLogo.png';

const Home = () => {
    const style1 = {width : '240px'}
    const img = 'image/jenny.png';
  return (
    <div className='home'>
        <h2>Home.jsx</h2>
        <img src={Logo} style={style1} alt="펭귄" />
        <img src="image/jenny.png" style={style1} alt="제니" />
    </div>
  )
}

export default Home