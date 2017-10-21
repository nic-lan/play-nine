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

    const selectedNumbers = [1, 2, 3, 4, 5]
    expect(wrapper.state('selectedNumbers')).toEqual(selectedNumbers)

    // check initial number of rendered stars
    expect(wrapper.find('Star').length).toEqual(starsNumber.length)

    // check initial rendered Numbers
    expect(wrapper.find('Numbers').find('Number').length).toEqual(numbers.length)

    // check initial rendered SelectedNumbers
    expect(wrapper.find('SelectedNumbers').find('Number').length).toEqual(selectedNumbers.length)
  })
})
