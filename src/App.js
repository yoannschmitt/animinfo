import React from 'react';
import { Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import Header from './components/Header.js'
import TopView from './components/views/TopView.js'
import SearchAnimeView from './components/views/SearchAnimeView.js'
import AnimeInfo from './components/views/AnimeInfo.js'
import FavoritesView from './components/views/FavoritesView.js'


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Switch>
        <Route exact path="/" component={SearchAnimeView} />
        <Route exact path="/top" component={TopView} />
        <Route exact path="/anime/:id" component={AnimeInfo} />
        <Route exact path="/favorites" component={FavoritesView} />
      </Switch>
    </div>
  );
}

export default App;
