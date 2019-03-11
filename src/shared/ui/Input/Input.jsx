import React, { Component } from 'react';
import './Input.scss';
import PropTypes from 'prop-types';

class Input extends Component {
    render() {
        return (
            <label className="input">
                <span className="input__title"></span>
                <input type="" className="input__input" placeholder="" />
            </label>
        );
    }
};

export default Input;