import React, { PureComponent, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../Landing';
import Login from '../Login';
import Register from '../Register';

import { Header } from '../../components';

class AppView extends PureComponent {

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { props } = this;
    return (
      <Fragment>
        <Header
          showSkeleton={props.fetchingUser}
          loggedIn={props.loggedIn} />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </Fragment>
    );
  }
}

export default AppView;
