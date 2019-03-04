import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import ks from '../../assets/kevinshirley.png';
import tictactoe from '../../assets/logo.svg';

class Footer extends Component {

  constructor() {
    super();

    var today = new Date(), year = today.getFullYear();

    this.state = {
      year: year
    };
  }

  render() {
    return (
      <footer className="footer">

        <div className="inner-footer">

          <div className="contact-social">

            <div className="social">
              <ul>
                <Fade bottom><li><a href="https://github.com/kevinshirley/tictactoe" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li></Fade>
                <Fade bottom><li><a href="mailto:info@kevinshirley.com"><i className="far fa-envelope"></i></a></li></Fade>
              </ul>
            </div>

          </div>

          <div className="copyrightandall">

            <div className="copyright">
              <Fade bottom><small>&copy; {this.state.year} <a href="http://kevinshirley.com" target="_blank" rel="noopener noreferrer">KevinShirley.com</a></small></Fade>
            </div>

            <div className="logo">
              <Fade bottom><Link to="/"><img src={tictactoe} alt="Tic Tac Toe Logo" /></Link></Fade>
            </div>

            <div className="poweredby">
              <Fade bottom><small>Powered By<a href="http://kevinshirley.com" target="_blank" rel="noopener noreferrer"><img src={ks} alt="Kevin Shirley" /></a></small></Fade>
            </div>

          </div>

          <div className="copyrightandall-mobile">

            <div className="poweredby">
              <Fade bottom><small>Powered By<a href="http://kevinshirley.com" target="_blank" rel="noopener noreferrer"><img src={ks} alt="Kevin Shirley" /></a></small></Fade>
            </div>

            <div className="copyright">
              <Fade bottom><small>&copy; {this.state.year} <a href="http://kevinshirley.com">KevinShirley.com</a></small></Fade>
            </div>

            <div className="logo">
              <Fade bottom><Link to="/"><img src={tictactoe} alt="tictactoe Logo" /></Link></Fade>
            </div>

          </div>

        </div>

      </footer>
    );
  }
}

export default Footer;