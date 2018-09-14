import React from 'react';
import {shallow} from 'enzyme';
import GameHeader from './GameHeader';

describe('GameHeader', () => {
  it('should render hidden when display prop is false', () => {
    const props = {
      display: false,
    };
    const wrapper = shallow(<GameHeader {...props} />);
    expect(wrapper.find('div.game-header--hidden').exists()).toBe(true);
  });

  it('should render visible when display prop is true', () => {
    const props = {
      display: true,
    };
    const wrapper = shallow(<GameHeader {...props} />);
    expect(wrapper.find('div.game-header--visible').exists()).toBe(true);
  });

  it('should render a navigation section with a change settings link inside', () => {
    const props = {
      display: true,
    };
    const wrapper = shallow(<GameHeader {...props} />);
    const container = wrapper.find('div.game-header__nav');
    expect(container.exists()).toBe(true);
    expect(container.find('Link').exists()).toBe(true);
    expect(container.find('Link').length).toBe(1);
    expect(container.find('Link').props().to).toEqual('/setup');
    expect(container.find('Link').props().children).toEqual('Change Settings');
  });
});