import React from 'react';
import ReactDOM from 'react-dom';
import  MovieList  from './components/MovieList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
     <Switch>
       <Route path="/" component={MovieList}/>
     </Switch>
     </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

