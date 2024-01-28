import React, { useEffect, useState } from 'react';
import "./Details.css"
import useApi from '../../hooks/useApi';
import { useParams, useNavigate } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const { data, setSearch } = useApi(true);
  const [isFavourite, setIsFavourite] = useState(false);
  const navigate = useNavigate();
  let favouriteMovies = JSON.parse(localStorage.getItem('favouriteMovies')) || [];

  useEffect(() => {
    setSearch(id);
    // setIsFavourite to determain if the movie in the favourite list or not
    setIsFavourite(!!favouriteMovies.find(movie => movie.imdbID === id));
  }, [])

  function handleFavourite() {
    if (favouriteMovies.find(movie => movie.imdbID === id)) {
      favouriteMovies = favouriteMovies.filter(movie => movie.imdbID !== id);
      setIsFavourite(false);
    } else {
      favouriteMovies.push(data);
      setIsFavourite(true);
    }
    localStorage.setItem('favouriteMovies', JSON.stringify(favouriteMovies));
  }

  return (
    <div className='details-container'>
      {data &&
        <div className='details-page'>
          <button className='back-link' onClick={() => navigate(-1)}>Back</button>
          <div className='movie-info'>
            <div className='right-side'>
              <div className='detail-image-poster'>
                <img src={data?.Poster} alt='poster' />
              </div>
              <div>
                <h1>{data?.Title}</h1>
                <p>{data?.Ratings[0]?.Value} {data?.Genre}</p>
                <p>{data?.Released}</p>
                <p className='plot'>{data?.Plot} {data?.Awards}</p>
              </div>
            </div>
            <div className='add-to-favourite' onClick={handleFavourite}>
              <button>{isFavourite ? 'Remove From Favourite' : 'Add To Favourite'}</button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Details