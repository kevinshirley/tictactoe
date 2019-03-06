import React from 'react';
import { shallow } from 'enzyme';
import Game from '../../components/game';

describe('Game', () => {
  it('should render correctly in "debug" mode', () => {
    const game = shallow(<Game debug />);
  
    expect(game).toMatchSnapshot();
  });
});