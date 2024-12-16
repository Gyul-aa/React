import React from 'react'
import './sports2.css'
const Sports2 = ({name,pic,id,rating}) => {
  return (
    <section>
        <h2>l like {name}</h2>
        <img src={pic} alt={name} />
        <h2>{rating} / 5.0</h2>
    </section>
  )
}

export default Sports2