import React from 'react';
import ReactDOM from 'react-dom';
import CheckButton from './CheckButton';
import { Button } from 'react-bootstrap';
import { shallow } from 'enzyme';

it('renders CheckButton', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button  />, div);
});

it('button div', () => {
  const wrapper = shallow(<CheckButton />);
  const buttonTag = <Button>=</Button>

  expect(wrapper).toContainReact(buttonTag)
});
