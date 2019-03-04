import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from '../common/CommonButton';
import Victory from '../../assets/victory-icon.svg';
import Tied from '../../assets/tied.svg';

let isToggleOpenModal, isToggleCloseModal;

class GameWinner extends Component {
	constructor() {
		super();
		
    this.state = {
      openModal: false,
      closeModal: false,
      closeToRestart: false,
      playerOne: '',
      playerTwo: '',
    };
    
    this.quit = this.quit.bind(this);
    this.restart = this.restart.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeToRestart = this.closeToRestart.bind(this);
    this.closeNow = this.closeNow.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.gameWinnerOpenModal !== this.state.openModal ) {
      this.openModal(this.props.gameWinnerOpenModal);
    }
    
    if (this.props.onClose !== this.state.closeToRestart ) {
      this.closeToRestart(this.props.onClose);
    }

    if (isToggleOpenModal !== this.state.openModal ) {
      this.toggleOpenModal(isToggleOpenModal);
    }

    if (isToggleCloseModal !== this.state.closeModal ) {
      this.toggleCloseModal(isToggleCloseModal);
    }
  }

  componentWillUnmount() {
    isToggleOpenModal = '';
    isToggleCloseModal = '';
  }

  onSubmit(e) {
    e.preventDefault();
  }

  restart() {
    this.props.onRestart(true);
  }

  quit() {
    this.setState({
      openModal: false,
      closeModal: true
    });
    this.props.history.push('/');
  }

  openModal(bool) {
    this.setState({
      openModal: bool,
      closeModal: false
    });
    this.toggleOpenModal(bool);
    return this.state.openModal;
  }

  closeToRestart(bool) {
    this.setState({
      closeToRestart: bool,
      openModal: false,
      closeModal: true
    }, () => this.closeNow(this.state.openModal, this.state.closeModal));
    return this.state.closeToRestart;
  }

  closeNow(stop, active) {
    this.props.closedNowReset(false);
    this.setState({
      openModal: stop,
      closeModal: active,
      closeToRestart: false
    });
    isToggleOpenModal = this.state.openModal; 
    isToggleCloseModal = this.state.closeModal;
  }

  toggleOpenModal(bool) {
    isToggleOpenModal = bool;
  }

  toggleCloseModal(bool) {
    isToggleCloseModal = bool;
    this.resetToggleCloseModal();
  }

  resetToggleCloseModal() {
    isToggleCloseModal = '';
  }
	
  render() {
		return (
			<div className={classnames('game-winner', {
        'game-winner-is-visible': isToggleOpenModal,
        'game-winner-not-visible': isToggleCloseModal
      })}>
				<div className="modal">

          <div className="title">
            <h2 className={classnames('winner-title', {
            'show': !this.props.isTie,
            'hide': this.props.isTie
            })}>Victory to {this.props.whoDidWin}</h2>

            <h2 className={classnames('tie-title', {
            'show': this.props.isTie,
            'hide': !this.props.isTie
            })}>It's a Tie</h2>
          </div>

					<div className="icon">
            <img className={classnames('winner-img', {
            'show': !this.props.isTie,
            'hide': this.props.isTie
            })} src={Victory} alt="Winner Icon"/>

            <img className={classnames('tie-img', {
            'show': this.props.isTie,
            'hide': !this.props.isTie
            })} src={Tied} alt="Tied Icon"/>
          </div>

          <div className="btns">
            <Button 
              name="Restart" 
              btnClass="btn" 
              onClick={this.restart} 
            />

            <Button 
              name="Quit" 
              btnClass="btn" 
              onClick={this.quit} 
            />
          </div>
				
				</div>
			</div>
		);
	}
}

// GameWinner.proptypes = {
  
// };

export default withRouter(GameWinner);