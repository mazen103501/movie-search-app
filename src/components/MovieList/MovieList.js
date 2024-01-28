import React from 'react';
import "./MovieList.css";
import MovieCard from '../MovieCard/MovieCard';

function MovieList({ movieListData, clickHandler }) {
  return (
    <div className='movie-list-continer'>
      <div className='movie-list'>
        {movieListData?.map((movie) =>
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            imdbID={movie.imdbID}
            type={movie.Type}
            posterUrl={movie.Poster}
            clickHandler={clickHandler}
          ></MovieCard>)}
      </div>
    </div>
  )
}

export default MovieList