import React from 'react'
import './MovieCard.css'
import { Link } from 'react-router-dom'

function MovieCard({ title, year, imdbID, type, posterUrl, clickHandler }) {
  return (
    <Link className='movie-card' to={`/details/${imdbID}`} onClick={clickHandler(imdbID)}>
      <div className='blur'></div>
      <div className='poster'>
        <img src={posterUrl === 'N/A' ? 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' : posterUrl} alt='movie-poster' />
      </div>
      <div className='movie-data'>
        <div>
          <p className='title'>{title}</p>
        </div>
        <div className='info'>
          <p>{type}</p>
          <p>{year}</p>
        </div>
      </div>
    </Link>
  )
}
export default MovieCard