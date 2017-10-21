import React from 'react'
import ReactDOM from 'react-dom'
import SelectedNumbers from './SelectedNumbers'
import { shallow } from 'enzyme'

it('renders SelectedNumbers', () => {
  const selectedNumbers = [1,2]
  const component = <SelectedNumbers selectedNumbers={selectedNumbers} />
  const div = document.createElement('div')
  ReactDOM.render(component, div)
})

it('button div', () => {
  const selectedNumbers = [1,2]
  const wrapper = shallow(<SelectedNumbers selectedNumbers={selectedNumbers} />)
  expect(wrapper.find('Number').length).toEqual(selectedNumbers.length);
})
