import React from 'react'
import { useEffect, useState } from 'react'
function UseEffectSample4() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        let timer = setTimeout(() => {
            setCount((count)=>count+1);
        }, 1000);
    },[]); // 의존관계없이 한번만 실행
  return (
    <div>
        <h1>화면 rendered : {count} 번</h1>
    </div>
  )
}
export default UseEffectSample4