import React, { Component } from 'react';
import Title from './Title';
import Board from './Board';
import GameWinner from './GameWinner';

let isWinner, isRestart, isClose, stillRestarting, closedSoReset, whoWonGame, isTie;

class Game extends Component {
	constructor() {
		super();
		
    this.state = {
			gameWinner: false,
			restartingTheGame: false,
			closeModalToRestarting: false,
			tie: false,
			whoWon: '',
		};
	}

	componentDidMount() {
		// start react component from the top
    window.scrollTo(0, 0);
	}

	winnerHere = (bool = false, who = '', tie = false) => {
		isWinner = bool;
		whoWonGame = who;
		isTie = tie;
    this.setState({ gameWinner: isWinner, whoWon: whoWonGame, tie: isTie });
	}
	
	restartingGame = (bool) => {
		isRestart = bool;
    this.setState({ restartingTheGame: isRestart });
	}

	resetRestartGame = (bool) => {
		stillRestarting = bool;
		this.setState({ restartingTheGame: stillRestarting });
	}
	
	closeModal = (bool) => {
    isClose = bool;
    this.setState({ closeModalToRestarting: isClose });
	}

	resetSinceModalClosed = (bool) => {
    closedSoReset = bool;
    this.setState({ closeModalToRestarting: closedSoReset });
	}

	onTieGame = (bool) => {
		console.log('tie game?');
		console.log(bool);
	}
	
  render() {
		return (
			<section className="game">
				<div className="overlay">

					<Title players={this.props.players} />
					<Board 
						onGameWinner={this.winnerHere} 
						restartGame={this.state.restartingTheGame} 
						closeModalToRestart={this.closeModal}
						stillRestarting={this.resetRestartGame}
						tieGame={this.onTieGame}
					/>
					<GameWinner 
						gameWinnerOpenModal={this.state.gameWinner} 
						onRestart={this.restartingGame}
						onClose={this.state.closeModalToRestarting}
						closedNowReset={this.resetSinceModalClosed}
						whoDidWin={this.state.whoWon}
						isTie={this.state.tie}
					/>
				
				</div>
			</section>
		);
	}
}

export default Game;