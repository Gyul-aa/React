import React from 'react'
import './movie.css'

function Movie({year, title, summary, poster, genres,rating}) {
  return (
    <div className='movie'>
        <img src={poster} alt={title} />
        <div className='movie_data'>
            <h3>{title}</h3>
            <p> 평점❤ : {rating}</p>
            <h4>{year}</h4>
            <ul>
                {genres.map((genres)=>(<li> {genres}</li>))}
            </ul>
            <p>{summary.slice(0,180)}...</p>
        </div>
    </div>
  )
}

export default Movie
