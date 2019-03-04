import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import TextFieldGroup from '../common/TextFieldGroup';

class Title extends Component {
  constructor() {
		super();
		
    this.state = {
      newGameOpenModal: true,
      players: '',
      playerOne: '',
      playerTwo: '',
    };
    
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  componentDidMount(prevProps) {
    if (this.props.players !== this.state.players) {
      let players = this.props.players;
      let playerOne = '';
      let playerTwo = '';
      if (players) {
        playerOne = (players.playerOne ? players.playerOne : '');
        playerTwo = (players.playerTwo ? players.playerTwo : '');
      }
      this.setState({
        playerOne: playerOne,
        playerTwo: playerTwo,
      });
    }
  }

  render() {
		return (
			<section className="game-title">
        <div className="overlay">

          <div className="logo">
            <Link to={'/'}><img src={logo} alt="Tic Tac Toe" /></Link>
          </div>

          <div className="players">
            <TextFieldGroup 
              placeholder="Enter the player name"
              name="playerOne"
              type="text"
              value={this.state.playerOne}
              onChange={this.onChange}
              error={''}
              id="in-game-player-1"
              htmlFor="in-game-player-1"
              icon="people"
              label="Player 1"
              disabled={true}
            />

            <TextFieldGroup 
              placeholder="Enter the player name"
              name="playerTwo"
              type="text"
              value={this.state.playerTwo}
              onChange={this.onChange}
              error={''}
              id="in-game-player-2"
              htmlFor="in-game-player-2"
              icon="people"
              label="Player 2"
              disabled={true}
            />
          </div>

        </div>
			</section>
		);
	}
}

export default Title;