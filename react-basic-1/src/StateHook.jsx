/*  
    Hook
    : 함수 컴포넌트 안에서 사용할 수 있는 특별한 함수 
    각각의 기능을 가지고 있음
    (예) useState는 state를 함수형 컴포넌트안에서 사용할 수 있게 해줌
    => 클래스형 컴포넌트에서는 동작안함

    #1. state
    : state = 컴포넌트가 데이터(동적)를 가질 수 있는 상태
    React Hook의 useState는 state를 간단히 생성하고 업데이트 할 수 있는 리액트 제공 도구임

    #2. useState
    : 컴포넌트가 랜더링할때 한번만 생성 -> 다음 렌더링하는 동안 현재의 state 값을 제공함
    초기값을 설정하면 state, setState 두가지 요소를 [배열형태]로 리턴 => 첫번째 랜더링때 딱 한번 사용됨
    useState = 초기 인자값으로 state 값 하나를 받음
    this.state와 달리 useState의 state는 반드시 객체일 필요는 없음

*/
// useState Hook, useEffect = 가장 많이 사용 //
// 콜백함수 : 다른 함수의 인수로 전달되어 특정작업을 완료한 후에 실행되는 함수
// 비동기 작업이나 이벤트가 발생했을 때 그것에 대한 결과로 실행되도록 예약됨

import React from 'react'
import {useState} from 'react'
function StateHook() {
    const [count,setCount] = useState(0); 
  return (
    <div>
        <p>마우스 이벤트 클릭 횟수 : {count} 번</p>
        <button onClick={()=>{setCount(count+1)}}>클릭</button>
    </div>
  )
}

export default StateHook