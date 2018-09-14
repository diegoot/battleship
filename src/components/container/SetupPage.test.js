import React from 'react';
import {shallow} from 'enzyme';
import {SetupPage} from './SetupPage';

describe('SetupPage', () => {
  it('should render a setup form if setup page is not submitted', () => {
    const props = {
      attempts: 10,
      setup: () => {},
    };
    const wrapper = shallow(<SetupPage {...props} />);
    const setupForm = wrapper.find('SetupForm');

    expect(setupForm.exists()).toBe(true);
    expect(setupForm.props().onSubmit).toBeDefined();
    expect(setupForm.props().onSubmit).toBe(wrapper.instance().handleSubmit);
    expect(setupForm.props().attempts).toBeDefined();
    expect(setupForm.props().attempts).toBe(props.attempts);
  });

  it('should redirect to game page when page submits', () => {
    const props = {
      attempts: 10,
      setup: () => {},
    };
    const wrapper = shallow(<SetupPage {...props} />);
    wrapper.setState({isSubmitted: true});
    const redirect = wrapper.find('Redirect');

    expect(redirect.exists()).toBe(true);
    expect(redirect.props().to).toEqual('/game');
  });

  it('should redirect to game page when page submits', () => {
    const props = {
      attempts: 10,
      setup: () => {},
    };
    const spy = jest.spyOn(props, 'setup');
    const wrapper = shallow(<SetupPage {...props} />);

    expect(wrapper.state().isSubmitted).toBe(false);
    wrapper.instance().handleSubmit(12);
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state().isSubmitted).toBe(true);
  });
});