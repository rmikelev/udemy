import React from 'react';
import ReactDOM from 'react-dom';
import  MovieList  from './components/MovieList';
import UserMovieList from './components/UserMovieList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav';



ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
     <Nav />     
      <Switch>
        <Route exact path="/" component={MovieList}/>
        <Route exact path="/user-movie-list" component={UserMovieList}/>
      </Switch>
     </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

