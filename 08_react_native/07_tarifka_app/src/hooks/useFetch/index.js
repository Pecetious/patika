import {useEffect, useState} from 'react';
import axios from 'axios';
const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const {data} = await axios.get(url).catch(error => setError(error.message));
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {data, loading, error};
};

export default useFetch;
