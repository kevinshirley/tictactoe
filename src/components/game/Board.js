import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { IconButton } from '../common/CommonButton';
// import O from '../../assets/o-icon.svg';
// import X from '../../assets/x-icon.svg';

let arr = [
  '', '', '',
  '', '', '',
  '', '', ''
], positionArr = [], lastPosition = '', lastTurn = '';

class Board extends Component {
  constructor() {
		super();
		
    this.state = {
      turn: 'X',
      gameEnded: false,
      restartGame: false,
      board: Array(9).fill(''),
      isTie: [],
      winner: '',
      totalMoves: 0
    };
    
    this.getWinner = this.getWinner.bind(this);
    this.clicked = this.clicked.bind(this);
    this.resetgame = this.resetgame.bind(this);
    this.reset = this.reset.bind(this);
    this.rewind = this.rewind.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.restartGame !== this.state.restartGame ) {
      this.restartGame(this.props.restartGame);
    }

    if (this.state.isTie.length >= 9) {
      this.gameWon(true, '', true);
      this.reset('');
    }
  }

  getWinner() {
    let board = this.state.board;
    let moves = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]];
    
    for (let i = 0; i < moves.length; i++) {
      if (board[moves[i][0]] === board[moves[i][1]] && board[moves[i][1]] === board[moves[i][2]]) {
        return board[moves[i][0]];
      } else if (board[0] === board[3] && board[0] === board[6]) {
        return board[0];
      } else if (board[1] === board[4] && board[1] === board[7]) {
        return board[1];
      } else if (board[2] === board[5] && board[2] === board[8]) {
        return board[2];
      }
    }
  }

  clicked(e) {
    let position = e.target.dataset.square;
    lastPosition = position;
    lastTurn = this.state.turn;

    if (position !== '' && position !== undefined && !positionArr.includes(position)) {
      positionArr.push(position);
      this.setState({ isTie: positionArr });
    }

    if (this.state.board[position] === '') {
      e.target.innerText = this.state.turn;
  
      arr[position] = this.state.turn;
  
      this.setState({
        turn: this.state.turn === 'X' ? 'O' : 'X',
        restartGame: false,
        board: arr
      });
  
      let result = this.getWinner();

      if (result === 'X') {
        this.resetgame('X');
      } else if (result === 'O') {
        this.resetgame('O');
      }
    }
  }

  reset(winner) {
    this.setState({
      turn: 'X',
      board: Array(9).fill(''),
      isTie: [],
      gameEnded: true,
      winner: winner
    }, () => this.clearBoard(this.state.board));

    arr = [
      '', '', '',
      '', '', '',
      '', '', ''
    ];

    positionArr = [];
    lastPosition = '';
  }

  resetgame(winner) {
    this.reset(winner);
    this.gameWon(true, winner, false);
  }

  gameWon(bool, winner, isTie) {
    this.props.onGameWinner(bool, winner, isTie);
  }

  clearBoard(board) {
    this.setState({
      board: board,
    });

    let boxes = document.querySelectorAll('.box');

    for(let i = 0; i < boxes.length; i++) {
      boxes[i].innerHTML = '';
    }
  }

  restartGame(bool) {
    if (bool) {
      this.setState({
        restartGame: bool,
        turn: 'X',
        board: Array(9).fill(''),
        isTie: [],
        gameEnded: false,
        winner: ''
      });
  
      arr = [
        '', '', '',
        '', '', '',
        '', '', ''
      ];

      positionArr = [];

      lastPosition = '';
    }

    this.nowCloseModal(bool);
  }

  nowCloseModal(bool) {
    this.props.closeModalToRestart(bool);
    this.setState({
      restartGame: false,
    });
    this.props.stillRestarting(false);
  }

  rewind() {
    if (positionArr.includes(lastPosition)) {
      let index = positionArr.indexOf(lastPosition);
      positionArr.splice(index, 1);

      arr[lastPosition] = '';
      this.setState({ board: arr, turn: lastTurn });

      let boxes = document.querySelectorAll('.box');
      boxes[lastPosition].innerHTML = '';
    }
  }

  render() {
		return (
			<section className="game-board">
        <div className="overlay">

          <div className="btns">
            <IconButton 
              icon="replay"
              btnClass="btn" 
              onClick={this.reset}
            />

            <IconButton 
              icon="skip_previous"
              btnClass="btn" 
              onClick={this.rewind}
            />
          </div>

          <div className="board">
            <div className="board-table" onClick={(e)=>this.clicked(e)}>
              <div className="row">
                <div className="box" id="box1" data-square="0">
                  
                </div>
                <div className="box" id="box2" data-square="1">
                  
                </div>
                <div className="box" id="box3" data-square="2">
                  
                </div>
              </div>
              <div className="row">
                <div className="box" id="box4" data-square="3">
                  
                </div>
                <div className="box" id="box5" data-square="4">
                  
                </div>
                <div className="box" id="box6" data-square="5">
                  
                </div>
              </div>
              <div className="row">
                <div className="box" id="box7" data-square="6">
                  
                </div>
                <div className="box" id="box8" data-square="7">
                  
                </div>
                <div className="box" id="box9" data-square="8">
                  
                </div>
              </div>
            </div>
          </div>

        </div>
			</section>
		);
	}
}

Board.proptypes = {
  game: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, {})(withRouter(Board));