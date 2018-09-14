import React from 'react';
import PropTypes from 'prop-types';
import {LEVELS} from 'utils/constants';
import './SetupForm.css';

class SetupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attempts: props.attempts,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const {attempts} = this.state;
    const {onSubmit} = this.props;

    onSubmit(attempts);
  }

  handleChange(e) {
    this.setState({attempts: +e.target.value});
  }

  render() {
    const {attempts} = this.state;

    return (
      <div className="setup-form">
        <h1 className="setup-form__title">Choose your game preferences</h1>
        <form onSubmit={this.handleSubmit} className="setup-form__form">
          <div className="setup-form__row">
            <label htmlFor="attempts" className="setup-form__label">Level</label>
            <select id="attempts" value={attempts} onChange={this.handleChange} className="setup-form__control">
              {LEVELS.map((level, index) =>
                <option key={index} value={level.attempts}>{level.name}</option>
              )}
            </select>
          </div>
          <button type="submit">Start</button>
        </form>
      </div>
    );
  }
}

SetupForm.propTypes = {
  attempts: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SetupForm;