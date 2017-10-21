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

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    expect(wrapper.state('numbers')).toEqual(numbers)

    const starsNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    expect(wrapper.state('starsNumber')).toEqual(starsNumber)

    expect(wrapper.state('selectedNumbers')).toHaveLength(0)

    // check initial number of rendered stars
    expect(wrapper.find('Star')).toHaveLength(starsNumber.length)

    // check initial rendered Numbers
    expect(wrapper.find('Numbers').find('Number')).toHaveLength(9)

    // check initial rendered SelectedNumbers
    expect(wrapper.find('SelectedNumbers').find('Number')).toHaveLength(0)
  })
})
