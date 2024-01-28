import React, { useEffect, useState } from 'react';
import "./Home.css";
import SearchBar from '../SearchBar/SearchBar';
import useApi from '../../hooks/useApi';
import MovieList from '../MovieList/MovieList';
import Pagination from '../Pagination/Pagination';

function Home() {
  const { setSearch, page, setPage, data, setData, loading, error } = useApi();
  const [cachedValues, setCachedValues] = useState(null);

  useEffect(() => {
    // Caching the search reslut in the local storage
    const cachedValues = JSON.parse(localStorage.getItem('cachedSearch'));
    if (cachedValues) {
      setCachedValues(cachedValues);
    }
  }, [data]);

  function handleSeachText(text) {
    if (text.length === 0) {
      setData(null);
      return;
    }
    setPage(1)
    setSearch(text)
  }

  function onPageChange(data) {
    setPage(data)
  }

  function handleClick() {
  }

  return (
    <>
      <div >
        <SearchBar searchChanged={handleSeachText} loading={loading}></SearchBar>
        {error && <h2 className='error-message'>*{error}</h2>}
        {(data?.Search || cachedValues?.Search) && <MovieList movieListData={data?.Search || cachedValues?.Search} clickHandler={handleClick}></MovieList>}
        <Pagination onPageChange={onPageChange} currentPage={page} totalCount={data?.totalResults}></Pagination>
      </div>
    </>
  )
}

export default Home