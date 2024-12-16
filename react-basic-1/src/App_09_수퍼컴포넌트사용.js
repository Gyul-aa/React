/* 
    - 수퍼 컴포넌트 사용하기 

    : map()함수를 사용, 여러 컴포넌트 데이터를 전달해 줄 수 있음
    가정 API나 서버에서 데이터가 넘어온다고 생각 / 객체배열 데이터로 연습

    # map 함수 특징
    : 객체배열 item 들을 자동으로 반복, 실행 => data 가져옴
    이 data 의 리턴값이 모여 배열이되고, return 에 의해 반환

    # map 함수 사용이유
    : 동적데이터 갯수와 상관없이 내가 원하는 data를 컴포넌트에서 쉽게 사용/ 처리할 수 있게해줌

    # map 함수 형식
    { 사용할 객체배열(api,내부배열,서버데이터 등등).map(()=>{}) }

*/

import React from 'react'
import Sports from './Sports'

function App() {
    return (
      <div id='wrap'>
        <h1>Super Component</h1>
        { sportsLike.map(sports => (<Sports name={sports.name} pic={sports.image}/>))}
        <Sports/>
      </div>
    )
  }

export default App

/* 객체 배열 데이터 연습 */
const sportsLike = [
    {
        name : 'running',
        image : 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
      },
      {
        name : 'swimming',
        image : 'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        name : 'cycle',
        image : 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BvcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
      },
      {
        name : 'lift',
        image : 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
      },
      {
        name : 'valleyball',
        image : 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        name : 'golf',
        image : 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BvcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
      },
]