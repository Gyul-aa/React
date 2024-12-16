import React from 'react'
import propTypes from 'prop-types'
import './movie.css'

function Movie({id, year, title, summary, poster, genres,rating}) {
  return (
    <div className='movie'>
        <img src={poster} alt={title} />
        <div className='movie_data'>
            <h3>{title}</h3>
            <p>평점 : {rating}</p>
            <h4>{year}</h4>
            <ul>
                {genres.map((genres,index)=>(<li key={index}> {genres} </li>))}
            </ul>
            <p>{summary.slice(0,180)}...</p>
        </div>
    </div>
  )
}
export default Movie

Movie.propTypes = {
    year : propTypes.number.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    poster : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired
}