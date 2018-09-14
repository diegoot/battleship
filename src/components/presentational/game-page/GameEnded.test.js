import React from 'react';
import {shallow} from 'enzyme';
import GameEnded from './GameEnded';

describe('GameEnded', () => {
  it('should render hidden when display prop is false', () => {
    const props = {
      display: false,
      onRetryClick: () => {},
      mainText: 'Fake text',
    };
    const wrapper = shallow(<GameEnded {...props} />);
    expect(wrapper.find('div.game-ended--hidden').exists()).toBe(true);
  });

  it('should render visible when display prop is true', () => {
    const props = {
      display: true,
      onRetryClick: () => {},
      mainText: 'Fake text',
    };
    const wrapper = shallow(<GameEnded {...props} />);
    expect(wrapper.find('div.game-ended--visible').exists()).toBe(true);
  });

  it('should render the main text with no success class when success prop is not present', () => {
    const props = {
      display: true,
      onRetryClick: () => {},
      mainText: 'Fake text',
    };
    const wrapper = shallow(<GameEnded {...props} />);
    expect(wrapper.find('h1.game-ended__main-text').exists()).toBe(true);
    expect(wrapper.find('h1.game-ended__main-text.game-ended__main-text--success').exists()).toBe(false);
  });

  it('should render the main text with success class when success prop is present', () => {
    const props = {
      display: true,
      onRetryClick: () => {},
      mainText: 'Fake text',
      success: true,
    };
    const wrapper = shallow(<GameEnded {...props} />);
    expect(wrapper.find('h1.game-ended__main-text.game-ended__main-text--success').exists()).toBe(true);
  });

  it('should invoke onRetryClick function when secondary text is clicked', () => {
    const props = {
      display: true,
      onRetryClick: () => {},
      mainText: 'Fake text',
    };
    const spy = jest.spyOn(props, 'onRetryClick');
    const wrapper = shallow(<GameEnded {...props} />);
    wrapper.find('h2').simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('should render the given main text', () => {
    const mainText = 'Fake text';
    const props = {
      display: true,
      onRetryClick: () => {},
      mainText,
    };
    const wrapper = shallow(<GameEnded {...props} />);
    expect(wrapper.find('h1').text()).toBe(mainText);
  });
});