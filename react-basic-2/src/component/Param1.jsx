import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Param1 = () => {
    const {id} = useParams(); // 자바 getparameter() 와 비슷, 변수명 id에 값 할당
  return (
    <div className='comp'>
        <h1>Param1 컴포넌트</h1>
        <h2>요청 id : {id}</h2>
        <p>해당 URL 페이지</p>
    </div>
  )
}

export default Param1