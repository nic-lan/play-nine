import React from 'react'
import ReactDOM from 'react-dom'
import Stars from './Stars'
import Star from './Star'
import { mount } from 'enzyme'

describe('Star', () => {
  it('renders successfully', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Star />, div)
  })
})

describe('Stars', () => {
  it('renders Stars', () => {
    const starsNumber = [1,2]
    const div = document.createElement('div')
    ReactDOM.render(<Stars starsNumber={starsNumber} />, div)
  })

  it('i div', () => {
    const numbers = [1,2]
    const wrapper = mount(<Stars starsNumber={numbers} />)
    expect(wrapper.find('Star').length).toEqual(numbers.length)
  })
})
