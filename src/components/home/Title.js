import React, { Component } from 'react';
import logo from '../../assets/logo.svg';

class Title extends Component {
  render() {
		return (
			<section className="home-title">

        <img src={logo} alt="Tic Tac Toe" />
				
			</section>
		);
	}
}

export default Title;