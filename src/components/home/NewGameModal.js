import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import TextFieldGroup from '../common/TextFieldGroup';
import { Button } from '../common/CommonButton';
import { setPlayers } from '../../store/actions/gameActions';

let isToggleOpenModal, isToggleCloseModal;

class NewGameModal extends Component {
	constructor() {
		super();
		
    this.state = {
      openModal: false,
      closeModal: false,
      resetNowOpen: false,
      playerOne: '',
      playerTwo: '',
      error: false
    };
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onQuit = this.onQuit.bind(this);
    this.startGame = this.startGame.bind(this);
    this.openModal = this.openModal.bind(this);
    this.toggleOpenModal = this.toggleOpenModal.bind(this);
    this.closeNow = this.closeNow.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isNewGameModalOpen !== this.state.openModal) {
      this.openModal(this.props.isNewGameModalOpen);
    }

    if (this.props.isNewGameModalClose !== this.state.closeModal) {
      this.closeModal(this.props.isNewGameModalClose);
    }
  }

  openModal(bool) {
    this.setState({
      openModal: bool,
    });
    this.toggleOpenModal(bool, false);
  }

  toggleOpenModal(active) {
    isToggleOpenModal = active;
  }

  closeModal(bool) {
    this.setState({
      closeModal: bool,
      openModal: false
    }, () => this.closeNow(this.state.openModal, this.state.closeModal));
  }

  closeNow(stop, active) {
    this.setState({
      openModal: stop,
      closeModal: active,
      resetNowOpen: false
    });
    isToggleOpenModal = this.state.openModal; 
    isToggleCloseModal = this.state.closeModal;
    this.startReset();
  }

  startReset() {
    this.setState({
      openModal: false,
      closeModal: false,
    }, () => this.props.onReset(false));
  }

  onSubmit(e) {
    e.preventDefault();
  }
  
  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onQuit() {
    this.props.quitModal(true);
  }

  startGame() {
    if (this.state.playerOne !== '' && this.state.playerTwo !== '') {
      this.setState({ error: false });
      const obj = {
        playerOne: this.state.playerOne,
        playerTwo: this.state.playerTwo,
      };
      this.props.setPlayers(obj, this.props.history);
    } else {
      this.setState({ error: true });
    }
  }
	
  render() {
		return (
			<form onSubmit={this.onSubmit} className={classnames('new-game-form', {
        'new-game-is-visible': isToggleOpenModal,
        'new-game-not-visible': isToggleCloseModal
      })}>
				<div className="modal">

          <div className="quit">
            <i className="material-icons" onClick={this.onQuit}>close</i>
          </div>

          <div className="title">
            <h2>Start a new game</h2>
          </div>

					<TextFieldGroup 
            placeholder="Enter the player name"
            name="playerOne"
            type="text"
            value={this.state.playerOne}
            onChange={this.onChange}
            error={''}
            id="new-game-player-1"
            htmlFor="new-game-player-1"
            icon="people"
            label="Player 1"
          />

          <TextFieldGroup 
            placeholder="Enter the player name"
            name="playerTwo"
            type="text"
            value={this.state.playerTwo}
            onChange={this.onChange}
            error={''}
            id="new-game-player-2"
            htmlFor="new-game-player-2"
            icon="people"
            label="Player 2"
          />

          <div className={classnames('no-invalid-feedback', {
            'invalid-feedback': this.state.error
          })}>
            <span>Please fill all the fields to start</span>
          </div>

          <Button 
            name="Start!" 
            btnClass="btn" 
            onClick={this.startGame} 
          />
				
				</div>
			</form>
		);
	}
}

NewGameModal.proptypes = {
  game: PropTypes.object.isRequired,
  setPlayers: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, { setPlayers })(withRouter(NewGameModal));