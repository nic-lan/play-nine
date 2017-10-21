import React from 'react'
import ReactDOM from 'react-dom'
import CheckButton from './CheckButton'
import { Button } from 'react-bootstrap';
import { shallow } from 'enzyme'

it('renders Numbers', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CheckButton  />, div)
})

it('button div', () => {
  const wrapper = shallow(<CheckButton />)
  const buttonTag = <Button>=</Button>

  expect(wrapper).toContainReact(buttonTag)
})
