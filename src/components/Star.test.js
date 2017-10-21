import React from 'react'
import ReactDOM from 'react-dom'
import Star from './Star'
import { mount } from 'enzyme'

describe('Star', () => {
  it('renders successfully', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Star />, div)
  })

  it('i div', () => {
    const wrapper = mount(<Star />)
    expect(wrapper.find('i').length).toEqual(1)
  })
})
