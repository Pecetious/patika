import {useEffect, useState} from 'react';
import axios from 'axios';
const useFetch = url => {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    const {data} = await axios.get(url).catch(err => setError(err.message));
    setResponseData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {error, loading, responseData};
};
export default useFetch;
