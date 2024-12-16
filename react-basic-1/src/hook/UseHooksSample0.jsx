/* useState Hook Sample */
import React, {useEffect, useState} from 'react'

function UseHooksSample0() {
    const [color, setColor] = useState('red');
    return (
    <>
        <h1>내가 좋아하는 색깔은 {color}</h1>
        <button onClick={()=>setColor('red')}>red</button>
        <button onClick={()=>setColor('green')} >green</button>
        <button onClick={()=>setColor('blue')}>blue</button>
        <button onClick={()=>setColor('black')}>black</button>
    </>
  )
}

export default UseHooksSample0