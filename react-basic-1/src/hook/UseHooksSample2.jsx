import React, { useState } from 'react'

function UseHooksSample2() {
    /* 객체 Data */
    const [car , setCar] = useState({
        brand : 'kia',
        model : 'Sorento',
        year : '2015',
        color : 'black',
});
  return (
    <div>
         <h1>
            나의 차의 브랜드는 {car.brand} 이고, <br/>
            컬러는 {car.color} 모델명 {car.model} 연식은 {car.year} 입니다.
        </h1>
    </div>
  )
}

export default UseHooksSample2