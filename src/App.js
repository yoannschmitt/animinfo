import React from 'react';
import { Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import Header from './components/Header.js'
import TopView from './components/views/TopView.js'
import SearchAnimeView from './components/views/SearchAnimeView.js'


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Switch>
        <Route exact path="/" component={SearchAnimeView} />
        <Route exact path="/top" component={TopView} />
      </Switch>
    </div>
  );
}

export default App;
