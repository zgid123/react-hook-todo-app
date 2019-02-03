import React from 'react';
import { Switch } from 'react-router-dom';

import Todos from './containers/Todos';

const App = () => {
  return (
    <Switch>
      <Todos />
    </Switch>
  );
};

export default App;
