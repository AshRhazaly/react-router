// Libs
import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter,
  Route,
  Link,
} from 'react-router-dom';

// CSS
import './css/style.css';

// Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Teachers from './components/Teachers';

// Render
render((
  <HashRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </HashRouter>
), document.getElementById('root'));
