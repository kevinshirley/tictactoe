import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled,
  icon,
  iconClass,
  id,
  htmlFor
}) => {
  return (
    <div className="input-wrapper form-group">
      <div className="inner-wrap">
        <label htmlFor={htmlFor} ><i className={iconClass}>{icon}</i> {label}</label>
        <div className="input-container">
          <input 
            type={type} className={classnames('form-control', {
              'trip-is-invalid': error
            })} 
            name={name} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} 
            id={id}
            disabled={disabled}
          />
          {info && <small className="form-text text-muted">{info}</small>}
          {error && (
            <small className="invalid-feedback">{error}</small>
          )}
        </div>
      </div>
    </div>
  )
}

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  id: PropTypes.string,
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  iconClass: PropTypes.string,
}

TextFieldGroup.defaultProps = {
  type: 'text',
  iconClass: 'material-icons'
}

export default TextFieldGroup;