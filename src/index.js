// Libs
import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';

// CSS
import './css/style.css';

// Components
import App from './components/App';
import Home from './components/Home';

// Render
render((
  <HashRouter>
    <Route path="/" component={Home} />
  </HashRouter>
), document.getElementById('root'));
