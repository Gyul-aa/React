import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation, EffectFade } from 'swiper';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './chracters.css'

// Navication 사용시 SwiperCore를 이용하여 Navigation을 사용할 것임을 알려줘야 함
// 추가로 작동이 안되는 기능이 있을 때, 해당 API를 보고 추가해야함(EffectFade 작동되지 않아 추가함)
// => 리액트 버전에 따라 index.js(엄격모드를 사용하면 안됨)를 수정해야 할 수 도있음

function Characters() {

    SwiperCore.use([Navigation,EffectFade]);
    const swiperStyle = {
        position : 'relative',
        width : '100%',
        height : '100%',
    }

    const swiperNavigation = {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    }

    // 객체 배열
    const charWrite = characterList.map(char=>{
        return(
            <SwiperSlide key={char.id}>
                <div className="char_bg" style={char.style}>
                    <div className="char_info">
                        <h2>{char.name}</h2>
                        <h5>{char.actor}</h5>
                    </div>
                </div>
            </SwiperSlide>
        )
    });

  return (
    <section className="characters">
        <Swiper
            effect={'fade'}
            speed={1000}
            style={swiperStyle}
            navigation={swiperNavigation}
            loop={true}
        >
        {charWrite}
        <button type='button' className='swiper-prev'>
            <FontAwesomeIcon icon={faCaretLeft}/>
            <span>Prev</span>
        </button>
        <button type='button' className='swiper-next'>
            <FontAwesomeIcon icon={faCaretRight}/>
            <span>Next</span>
        </button>
        </Swiper>
    </section>
  )
}

export default Characters

const characterList = [
    {
      id: 1,
      name: 'Wanda Maximoff',
      actor: 'Elizabeth Olsen',
      style: {
        background: "url('./images/wanda.png') no-repeat center"
      }
    },
    {
      id: 2,
      name: 'Vision',
      actor: 'Paul Bettany',
      style: {
        background: "url('./images/vision.png') no-repeat center"
      }
    },
    {
      id: 3,
      name: 'Agnes',
      actor: 'Kathryn Hahn',
      style: {
        background: "url('./images/agnes.png') no-repeat center"
      }
    },
    {
      id: 4,
      name: 'Monica Rambeau',
      actor: 'Teyonah Parris',
      style: {
        background: "url('./images/monica.png') no-repeat center"
      }
    },
  ]