import React, { useState } from 'react'

function UseHooksSample1() {
    const [brand,setBrand] = useState('Kia');
    const [model,setModel] = useState('Sorento');
    const [year,setYear] = useState('2015');
    const [color,setColor] = useState('Black');
  return (
    <div>
        <h1>
            나의 차의 브랜드는 {brand} 이고, <br/>
            컬러는 {color} 모델명 {model} 연식은 {year} 입니다.
        </h1>
    </div>
  )
}

export default UseHooksSample1