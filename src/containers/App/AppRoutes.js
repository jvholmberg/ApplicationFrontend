import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../Landing';
import Login from '../Login';
import Register from '../Register';

const Unauthorized = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
  </Switch>
);

const Authorized = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
  </Switch>
);

const AppRoutes = (props) => props.loggedIn
  ? (<Authorized />)
  : (<Unauthorized />);

export default AppRoutes;
