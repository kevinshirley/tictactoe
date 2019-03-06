import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/common/Footer';
import ks from '../../assets/kevinshirley.png';

describe('Footer', () => {
  it('should render correctly in "debug" mode', () => {
    const footer = shallow(<Footer debug />);
  
    expect(footer).toMatchSnapshot();
  });

  // it('renders two ks images', () => {
  //   const footer = shallow(<Footer debug />);
  //   expect(footer.find(ks)).toExist();
  // });
});