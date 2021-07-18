import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

import { movieList } from './components/movieList';
// import { Form } from './components/form';

ReactDOM.render(
  <React.StrictMode> 
    <movieList/>
  </React.StrictMode>,
  document.getElementById('root')
);

