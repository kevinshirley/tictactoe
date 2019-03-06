import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../components/home';

describe('Home', () => {
  it('should render correctly in "debug" mode', () => {
    const home = shallow(<Home debug />);
  
    expect(home).toMatchSnapshot();
  });
});