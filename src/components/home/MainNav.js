import React, { Component } from 'react';
import logout from '../../assets/logout-icon.svg';

class MainNav extends Component {
  constructor() {
		super();
		
    this.state = {
      newGame: false,
    };
    
    this.initNewGame = this.initNewGame.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  initNewGame() {
    // this.setState({ newGame: false });
  }

  newGame() {
    this.setState({ newGame: true });
    this.props.onNewGame(true);
    this.initNewGame();
  }

  render() {
		return (
			<section className="home-main-nav">
				
        <button className="btn" onClick={this.newGame}>New Game</button>
        <button className="btn">Credit</button>
        <button className="btn">Exit <span><img src={logout} alt="Exit" /></span></button>

			</section>
		);
	}
}

export default MainNav;