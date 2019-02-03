import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Link from '../../components/atoms/Link';

import List from './List';
import CompletedList from './CompletedList';

const Tabs = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-around;
`;

const Todos = () => (
  <>
    <Tabs>
      <Link to='/'>New List</Link>
      <Link to='/completed'>Completed List</Link>
    </Tabs>
    <Switch>
      <Route
        exact
        path='/'
        component={List}
      />
      <Route
        path='/completed'
        component={CompletedList}
      />
      <Redirect to='/' />
    </Switch>
  </>
);

export default Todos;
