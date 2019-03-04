import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Button = ({
  name,
  icon,
  iconClass,
  info,
  onClick,
  color,
  btnClass
}) => {
  return (
    <div id="common-button">
        <button type="button" onClick={onClick} style={{ color: {color} }} className={btnClass}>
            <small style={{ color: {color} }}><i className={iconClass}>{icon}</i></small>&nbsp;&nbsp;{name}
        </button>
        {info && <small className="form-text text-muted">{info}</small>}
    </div>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconClass: PropTypes.string,
  info: PropTypes.string,
  color: PropTypes.string,
  btnClass: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  iconClass: 'material-icons'
}

export const ButtonUrl = ({
  name,
  url,
  icon,
  iconClass,
  info
}) => {
  return (
    <div id="common-button-url">
      <Link to={url}>
          <button>
              <span><small><i className={iconClass}>{icon}</i></small>&nbsp;&nbsp;{name}</span>
          </button>
          {info && <small className="form-text text-muted">{info}</small>}
      </Link>
    </div>
  )
}

ButtonUrl.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  icon: PropTypes.string,
  iconClass: PropTypes.string,
  info: PropTypes.string,
}

ButtonUrl.defaultProps = {
  iconClass: 'material-icons'
}

export const IconButton = ({
  icon,
  iconClass,
  info,
  onClick,
  color,
  btnClass
}) => {
  return (
    <div id="common-button">
        <button type="button" onClick={onClick} style={{ color: {color} }} className={btnClass}>
            <small style={{ color: {color} }}><i className={iconClass}>{icon}</i></small>
        </button>
        {info && <small className="form-text text-muted">{info}</small>}
    </div>
  )
}

IconButton.propTypes = {
  icon: PropTypes.string,
  iconClass: PropTypes.string,
  info: PropTypes.string,
  color: PropTypes.string,
  btnClass: PropTypes.string,
  onClick: PropTypes.func
}

IconButton.defaultProps = {
  iconClass: 'material-icons'
}