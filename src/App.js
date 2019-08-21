import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import GlorifiedGallery from "./gallery/GlorifiedGallery";
import GlorifiedPhoto from "./photodetails/GlorifiedPhoto";
import './App.css';

function App() {
  return (
    <HashRouter basename="/">
      <Switch >
        <Route exact path="/" component={GlorifiedGallery} />
        <Route path="/photo/:id" component={GlorifiedPhoto}/>
      </Switch>
    </HashRouter>
    );
}

export default App;
