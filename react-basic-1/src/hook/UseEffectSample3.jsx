import React from 'react'
import { useEffect, useState } from 'react'
function UseEffectSample3() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    useEffect(()=>{
        setCalculation(()=> count *2);
    },[count]); // count값이 바뀔때만 useEffect가 작동
  return (
    <div>
        <p>클릭횟수 : {count}</p>
        <button type='button' onClick={()=>{setCount((c)=>c+1)}}>Count+</button>
        <p>useEffect 호출 후 함수 결과값 : {calculation}</p>
    </div>
  )
}
export default UseEffectSample3