import { useState, useEffect } from 'react';

import LocalStorageService from '../utils/LocalStorageService';

const useFetchData = ({ endpoint }) => {
  const [data, setData] = useState([]);
  const [fetch, setFetch] = useState(false);

  const triggerFetchData = () => {
    setFetch(!fetch);
  };

  useEffect(() => {
    const todos = LocalStorageService.getItem('todos') || [];

    if (endpoint === 'completed') {
      setData(todos.filter(t => t.status === 'completed'));
    } else {
      setData(todos.filter(t => t.status !== 'completed'));
    }

    return () => { };
  }, [endpoint, fetch]);

  return { data, setData, triggerFetchData };
};

export default useFetchData;
