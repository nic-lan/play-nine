import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { mount } from 'enzyme'

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const wrapper = <App />
    ReactDOM.render(wrapper, div)
  })

  it('renders without crashing', () => {
    const wrapper = mount(<App />)
    expect(wrapper.state('numbers')).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(wrapper.state('starsNumber')).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(wrapper.state('selectedNumbers')).toEqual([1, 2, 3, 4, 5])
  })
})
