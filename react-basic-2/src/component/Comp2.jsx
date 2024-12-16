import React from 'react'
import { useState } from 'react'

const Comp2 = () => {
    // 기본 usestate 사용
    const [ ini , setIni ] = useState('초깃값');
    // 이벤트 리스너
    const iniChange = () => {
        setIni('안녕하세요');
    }
    // b. 기본 useState 사용 = 증가, 감소
    const [ count , setCount ] = useState(100);
    // 이벤트 리스너 
    const changeCount = () => {
        setCount(count+1);
    }
    const changeDownCount = () => {
        setCount(count-1);
    }

    const [txt, setTxt] = useState('');
    const inputText = (e) => {
        console.log('이벤트 타겟 name => ' + e.target.name);
        console.log('이벤트 타겟 value => ' + e.target.value);
        // 구조분해할당으로 name, value에 값 할당
        const {name,value} = e.target;
        // 할당된 동적값 변경 = set
        setTxt(value);
    }
    
    {/* d. 기본 useState 사용 = 버튼 이벤트 시 배경색 바꾸기 */}
    const [color,setColor] = useState("white");
    {/* e. 기본 useState 사용 = 체크여부 */}
    const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='comp'>
        {/* a. 기본 useState 사용 = 초깃값 변경 */}
        <p>{ini}</p>
        <button type='button' onClick={iniChange}>버튼</button>
        <p>---------------------------------------------------</p>
        {/* b. 기본 useState 사용 = 증가, 감소 */}
        <p>카운트 : {count}</p>
        <button onClick={changeCount}>증가</button>
        <button onClick={changeDownCount}>감소</button>
        <p>---------------------------------------------------</p>
        {/* c. 기본 useState 사용 = 폼 입력값 출력 */}
        <p>입력값 : {txt} </p>
        <input type="text" name='txt' onChange={inputText}/>
        <p>---------------------------------------------------</p>
        {/* d. 기본 useState 사용 = 버튼 이벤트 시 배경색 바꾸기 */}
        <p style={{backgroundColor:color}}>배경색</p>
        <button type='button' onClick={()=>{setColor('red')}}>RED</button> 
        <button type='button' onClick={()=>{setColor('green')}}>GREEN</button> 
        <button type='button'onClick={()=>{setColor('blue')}}>BLUE</button> 
        <p>---------------------------------------------------</p>
        {/* e. 기본 useState 사용 = 체크여부 */}
        <input type="checkbox" name='check' checked={isChecked} onChange={()=>{setIsChecked(!isChecked)}} />
        <p>체크여부 : {isChecked? '체크됨' : '체크안됨' }</p>

    </div>
  )
}

export default Comp2