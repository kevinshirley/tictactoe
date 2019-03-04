import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/common/Footer';

describe('Footer', () => {
  it('should render correctly in "debug" mode', () => {
    const footer = shallow(<Footer debug />);
  
    expect(footer).toMatchSnapshot();
  });
});