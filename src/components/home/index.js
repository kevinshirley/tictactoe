import React, { Component } from 'react';
import Title from './Title';
import MainNav from './MainNav';
import NewGameModal from './NewGameModal';

let quittingModal, newGameNow, resettingAll;

class Home extends Component {
	constructor() {
		super();
		
    this.state = {
			newGameOpenModal: false,
			newGameCloseModal: false,
		};
	}

	componentDidMount() {
		// start react component from the top
    window.scrollTo(0, 0);
	}

	onQuitModal = (bool) => {
		quittingModal = bool;
    this.setState({ newGameCloseModal: quittingModal });
    return this.state.newGameCloseModal;
	}
	
	startNewGame = (bool) => {
		newGameNow = bool;
    this.setState({ newGameOpenModal: newGameNow });
    return this.state.newGameOpenModal;
	}
	
	resetAll = (bool) => {
		resettingAll = bool;
    this.setState({ newGameOpenModal: resettingAll, newGameCloseModal: resettingAll });
  }
	
  render() {
		return (
			<section className="home">
				<div className="overlay">

					<Title />
					<MainNav onNewGame={this.startNewGame} />
					<NewGameModal 
						isNewGameModalOpen={this.state.newGameOpenModal}
						quitModal={this.onQuitModal}
						isNewGameModalClose={this.state.newGameCloseModal}
						onReset={this.resetAll}
					/>
				
				</div>
			</section>
		);
	}
}

export default Home;