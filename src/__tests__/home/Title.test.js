import React from 'react';
import { shallow } from 'enzyme';
import Title from '../../components/home/Title';

describe('Title', () => {
  it('should render correctly in "debug" mode', () => {
    const title = shallow(<Title debug />);
  
    expect(title).toMatchSnapshot();
  });
});