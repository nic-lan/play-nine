import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './Stars';

it('renders Stars', () => {
  const starsNumber = 2
  const div = document.createElement('div');
  ReactDOM.render(<Stars starsNumber={starsNumber} />, div);
});
