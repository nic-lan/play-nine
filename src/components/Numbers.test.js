import React from 'react'
import ReactDOM from 'react-dom'
import Numbers from './Numbers'
import { shallow } from 'enzyme'

it('renders Numbers', () => {
  const numbers = [1,2]
  const component = <Numbers numbers={numbers} />
  const div = document.createElement('div')
  ReactDOM.render(component, div)
})

it('button div', () => {
  const numbers = [1,2]
  const wrapper = shallow(<Numbers numbers={[1,2]} />)
  expect(wrapper.find('span').children().length).toEqual(numbers.length);
})
