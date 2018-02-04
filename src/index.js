import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from './containers/AppContainer';
import ScrollToTop from './components/ScrollToTop';

// Bootstrap reboot and grid
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import './fonts/index.css';

import './index.css';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-113396824-1');

function fireTracking() {
  ReactGA.pageview(window.location);
}

ReactDOM.render(
  <Router onUpdate={fireTracking}>
    <ScrollToTop>
      <AppContainer />
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
);
