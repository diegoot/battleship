import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {setup} from 'redux/actions/setup';
import SetupForm from 'components/presentational/setup-page/SetupForm';

export class SetupPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSubmitted: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(attempts) {
    this.setState({
      isSubmitted: true,
    });

    this.props.setup(attempts);
  }

  render() {
    const {isSubmitted} = this.state;
    const {attempts} = this.props;

    if (isSubmitted) {
      return <Redirect to="/game"/>
    }

    return <SetupForm onSubmit={this.handleSubmit} attempts={attempts} />
  }
}

const mapStateToProps = state => {
  return {
    attempts: state.setup.attempts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setup: attempts => dispatch(setup(attempts)),
  };
};

SetupPage.propTypes = {
  setup: PropTypes.func.isRequired,
  attempts: PropTypes.number.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(SetupPage);