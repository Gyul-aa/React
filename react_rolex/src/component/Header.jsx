import React from 'react'
import Ximage from '../images/icon_X.png'

const Header = () => {
  return (
    <div>
        <header class="cf">
            <h1 class="oswald">GRKIM</h1>
            <nav>
                <ul class="gnb">
                    <li><a href="#">njjekr1 </a></li>
                </ul>
                <ul class="icon">
                    <li><a href="#"><img src={Ximage} alt="닫기"/></a></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header