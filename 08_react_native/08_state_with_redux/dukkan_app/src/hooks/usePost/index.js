import axios from 'axios';
import {useState} from 'react';

const usePost = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const post = async (url, apiData) => {
    setLoading(true);
    try {
      const {data} = await axios.post(url, apiData);
      setData(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  return {data, loading, error, post};
};
export default usePost;
