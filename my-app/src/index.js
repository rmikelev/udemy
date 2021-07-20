import React from 'react';
import ReactDOM from 'react-dom';
import { Pagination } from './components/pagination';
import './index.css';

import { MovieList } from './components/movieList';
// import { Form } from './components/form';

ReactDOM.render(
  <React.StrictMode> 
    <movieList/>
    <Pagination/>
  </React.StrictMode>,
  document.getElementById('root')
);

