/* prop-types 사용 유효성 검사 = npm i prop-types */
import React from 'react'
import Sports2 from './Sports2.js'

function App() {
  return (
    <div id="wrap">
        <h1>리액트 prop-types Library 설치</h1>
        <p>
            정의한 props값이 컴포넌트에 제대로 전달되고 올바른지 유효성 검사를 해줌
        </p>
        { sportsLike.map( sports => (<Sports2 name={sports.name} pic={sports.image} id={sports.id} rating={sports.rating}/>))}
        {/* { sportsLike.map( (sports) => { return (<Sprots2 name = { sports.name } pic = { sports.image } key = { sports.id } rating = { sports.rating } />)})} */}
        <Sports2/>
    </div>
  )
}

export default App

/* 객체 배열 데이터 연습 */
const sportsLike = [
    {
        id : 1,
        rating : 5,
        name : 'running',
        image : 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
      },
      {
        id : 2,
        rating : 5,
        name : 'swimming',
        image : 'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        id : 3,
        rating : 5,
        name : 'cycle',
        image : 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BvcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
      },
      {
        id : 4,
        rating : 5,
        name : 'lift',
        image : 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
      },
      {
        id : 5,
        rating : 5,
        name : 'valleyball',
        image : 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        id : 6,
        rating : 5,
        name : 'golf',
        image : 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BvcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
      },
]