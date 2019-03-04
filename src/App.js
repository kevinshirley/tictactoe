import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import store from './store';
import './App.css';
import Home from './components/home';
import Game from './components/game';
import Footer from './components/common/Footer';

const mapStateToProps = (state) => ({
  game: state.game,
});

const mapDispatchToProps = dispatch => ({
  
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={ Home } />
          <Route exact path="/game" render={(props) => <Game {...props} players={this.props.game.players} />} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
