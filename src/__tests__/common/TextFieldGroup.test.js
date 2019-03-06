import React from 'react';
import { shallow } from 'enzyme';
import TextFieldGroup from '../../components/common/TextFieldGroup';

describe('TextFieldGroup', () => {
  it('should render correctly in "debug" mode', () => {
    const textFieldGroup = shallow(<TextFieldGroup debug />);
  
    expect(textFieldGroup).toMatchSnapshot();
  });
});