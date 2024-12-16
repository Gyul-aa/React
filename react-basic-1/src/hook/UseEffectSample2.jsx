import React, {useState, useEffect} from 'react'

function UseEffectSample2() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((count)=> count + 1);
        }, 1000);
    }, []); // 의존관계가 []이면 화면이 딱 한번만 그려짐
    return (
        <div>
            <h1>화면 rendered : { count } 번</h1>
        </div>
    )
}
export default UseEffectSample2