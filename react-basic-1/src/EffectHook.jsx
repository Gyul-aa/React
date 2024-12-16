/* useEffect() Hook 
    : 데이터 가져오기, 리액트 컴포넌트 DOM을 수정하는 것에 주로 사용됨
    class의 생명주기 함수를 합쳐서 사용하는 개념이라고 보면 됨
    componentDidMount + componentDidUpdate 등이 합쳐진 거라고 생각하면 됨
*/ 
import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'

function EffectHook() {
  const [ count, setCount ] = useState(0);
  useEffect(()=>{
        // 브라우저 API 를 이용
        document.title = `클릭 횟수 ${count}번`
  });
  return (
    <div>
        <p>유저 클릭횟수 {count}번</p>
        <button onClick={()=>setCount(count+1)}>클릭</button>
    </div>
  )
}

export default EffectHook