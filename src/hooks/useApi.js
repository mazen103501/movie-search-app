import { useEffect, useState } from 'react'

const useApi = (details) => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      if (!search) {
        setData(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        let apiEndPoint;
        if (details) {
          apiEndPoint = `${process.env.REACT_APP_API_URL}?apikey=${process.env.REACT_APP_API_KEY}&i=${search}`
        } else {
          apiEndPoint = `${process.env.REACT_APP_API_URL}?apikey=${process.env.REACT_APP_API_KEY}&s=${search}&page=${page}`
        }

        const response = await fetch(apiEndPoint);
        const result = await response.json();
        if (result.Error) {
          setError(result.Error);
          setData(null);
        } else {
          setData(result);
          if (!details) localStorage.setItem('cachedSearch', JSON.stringify({ ...result }));
        }

      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search, page, details]);

  return { search, setSearch, page, setPage, data, setData, loading, error };
};

export default useApi;