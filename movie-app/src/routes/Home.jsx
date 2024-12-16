import React from 'react'
import Movie from '../components/Movie'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Home() {
    // useState Hook //
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    // 실행함수 //
    async function getMovie() {
        const movieDate = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
        // 첫번째 data = axios가 응답을 받았을 때 자동으로 추가되는 프로퍼티, 실제 API 응답 본문
        setMovies(movieDate.data.data.movies);
        setIsLoading(false); // 데이터 로딩 완료 설정
    }

    // useEffect Hook //
    useEffect(()=>{
        getMovie();
    },[]);

  return (
    <section className='container'>
        <h2>Movie List TOP 20</h2>
        {isLoading? (
            <div className='loader'>
                <span>Loading...</span>
            </div>
        ) : (
            <div className='movies'>
                { movies.map( (movie)=> (
                    <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                    rating={movie.rating}
                    />
                )) }
            </div>
        ) }
    </section>
  )
}

export default Home