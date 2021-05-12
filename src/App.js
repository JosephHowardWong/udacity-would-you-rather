import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './Styles.css';
import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import NewQ from './NewQ'
import LeaderBoard from './LeaderBoard'
import QPg from './QPg'
import { ErrorPage } from './ErrorPage'
import { handleGetInitialUsers } from "./actions/users"
import { handleGetInitialQuestions } from "./actions/questions"

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleGetInitialUsers())
    this.props.dispatch(handleGetInitialQuestions())
  }

  render() {
    
      return (
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path="/add" component={NewQ} />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route path="/questions/:qid" component={QPg} />
            <Route path="/error" component={ErrorPage} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      )
  }
}

export default connect()(App);
