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

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <AppContainer />
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
);
