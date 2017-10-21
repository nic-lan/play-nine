import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './Stars';
import { shallow } from 'enzyme';

it('renders Stars', () => {
  const starsNumber = [1,2]
  const div = document.createElement('div');
  ReactDOM.render(<Stars starsNumber={starsNumber} />, div);
});

it('i div', () => {
  const numbers = [1,2]
  const wrapper = shallow(<Stars starsNumber={numbers} />)
  console.log(wrapper.find('i').length);
  expect(wrapper.find('i').length).toEqual(numbers.length);
});
