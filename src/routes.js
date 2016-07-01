import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import App from 'containers/App';

const routes = [{
  path: '/',
  component: App,
}];

const Routes = ({ history }) => (<Router history={history} routes={routes} />);

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
