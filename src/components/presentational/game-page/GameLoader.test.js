import React from 'react';
import {shallow} from 'enzyme';
import GameLoader from './GameLoader';

describe('GameLoader', () => {
  it('should render hidden when display prop is false', () => {
    const props = {
      display: false,
    };
    const wrapper = shallow(<GameLoader {...props} />);
    expect(wrapper.find('div.game-loader--hidden').exists()).toBe(true);
  });

  it('should render visible when display prop is true', () => {
    const props = {
      display: true,
    };
    const wrapper = shallow(<GameLoader {...props} />);
    expect(wrapper.find('div.game-loader--visible').exists()).toBe(true);
  });
});