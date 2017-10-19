import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './Stars';
import { shallow } from 'enzyme';

it('renders Stars', () => {
  const starsNumber = 2
  const div = document.createElement('div');
  ReactDOM.render(<Stars starsNumber={starsNumber} />, div);
});

it('i div', () => {
  const wrapper = shallow(<Stars starsNumber={1} />);
  const iTag = <i className="fa fa-star fa-2x"></i>

  expect(wrapper).toContainReact(iTag)
});
