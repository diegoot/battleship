import React from 'react';
import {shallow} from 'enzyme';
import GameFooter from './GameFooter';

describe('GameFooter', () => {
  it('should render hidden when display prop is false', () => {
    const props = {
      display: false,
      attemptsLeft: 10,
    };
    const wrapper = shallow(<GameFooter {...props} />);
    expect(wrapper.find('div.game-footer--hidden').exists()).toBe(true);
  });

  it('should render visible when display prop is true', () => {
    const props = {
      display: true,
      attemptsLeft: 10,
    };
    const wrapper = shallow(<GameFooter {...props} />);
    expect(wrapper.find('div.game-footer--visible').exists()).toBe(true);
  });

  it('should render a text with the attempts left', () => {
    const props = {
      display: true,
      attemptsLeft: 10,
    };
    const wrapper = shallow(<GameFooter {...props} />);
    expect(wrapper.find('h4.game-footer__title').text()).toEqual(`Attempts left: ${props.attemptsLeft}`);
  });
});