import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import showForm from './components/FormInformation/formTranslators';
import home from './components/Home/home';
import showLists from './components/ShowList/showList'
import personalInfo from './components/PersonalInfor/index'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/search" component={showForm} />
          <Route path="/list" component={showLists} />
          <Route path ='/show' component={personalInfo}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;


