/* 수퍼 컴포넌트의 하위 컴포넌트  */
import React from 'react'
import './sports.css'
const Sports = ({name, pic}) => {
    return (
        <section>
            <img src={pic} alt={name} />
            <h2>{name}</h2>
        </section>
    )
}
export default Sports