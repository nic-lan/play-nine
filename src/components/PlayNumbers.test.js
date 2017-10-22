import React from 'react'
import ReactDOM from 'react-dom'
import PlayNumbers from './PlayNumbers'
import Number from './Number'
import { shallow } from 'enzyme'

it('renders PlayNumbers', () => {
  const numbers = [1,2]
  const component = <PlayNumbers numbers={numbers} />
  const div = document.createElement('div')
  ReactDOM.render(component, div)
})

it('button div', () => {
  const numbers = [1,2]
  const wrapper = shallow(<PlayNumbers numbers={numbers} />)
  expect(wrapper.find('Number').length).toEqual(numbers.length);
})
