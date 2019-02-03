import React from 'react';

import useFetchData from '../../../hooks/useFetchData';

import TodoList from '../TodoList';

const CompletedList = () => {
  const { data, triggerFetchData } = useFetchData({ endpoint: 'completed' });

  return (
    <TodoList todos={data} triggerFetchData={triggerFetchData} />
  );
};

export default CompletedList;
