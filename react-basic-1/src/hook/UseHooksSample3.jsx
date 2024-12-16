import React, { useState } from 'react'

function UseHooksSample3() {
    const [car,setCar] = useState({
        brand : "kia",
        model : "sorento",
        year : "2015",
        color : "red",
    });

    /* (중요) */
    const updateColor = () => {
        setCar((previousState)=>{
            return {...previousState, color:"black", new:"newnew"}
        });

    }

  return (
    <div>         
        <h1>
        나의 차의 브랜드는 {car.brand} 이고, <br/>
        컬러는 {car.color} 모델명 {car.model} 연식은 {car.year} 입니다.
        </h1>
        <p>새로운 값 추가 : {car.new}</p>
        <button type='button' onClick={()=>{updateColor()}}>+Data</button>
    </div>
  )
}
export default UseHooksSample3