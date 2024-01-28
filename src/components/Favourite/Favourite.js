import React, { useEffect, useState } from 'react';
import "./Favourite.css"
import MovieList from '../MovieList/MovieList';

function Favourite() {
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    // Getting the favouriteMovies from local Storage
    const favouriteMoviesList = JSON.parse(localStorage.getItem('favouriteMovies')) || [];
    setFavouriteMovies(favouriteMoviesList)
  }, []);

  function handleFavouriteMoviesList(imdbId) {
  }

  return (
    <>
      {favouriteMovies.length === 0 && <h1 className='no-favourite'>No Favourite Movies</h1>}
      <MovieList movieListData={favouriteMovies} clickHandler={handleFavouriteMoviesList}></MovieList>
    </>
  )
}

export default Favourite