import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Route from './Route';

import SignUp from '../pages/SignUp';
import Signin from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
    </Switch>
  );
};

export default Routes;
