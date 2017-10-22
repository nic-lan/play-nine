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

  it('plays nine', () => {
    const wrapper = mount(<App />)

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    expect(wrapper.state('numbers')).toEqual(numbers)

    const starsNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    expect(wrapper.state('starsNumber')).toEqual(starsNumber)

    expect(wrapper.state('selectedNumbers')).toHaveLength(0)

    // check initial number of rendered stars
    expect(wrapper.find('Star')).toHaveLength(starsNumber.length)

    // check initial rendered PlayNumbers
    expect(wrapper.find('PlayNumbers').find('Number')).toHaveLength(9)

    // check initial rendered SelectedNumbers
    expect(wrapper.find('SelectedNumbers').find('Number')).toHaveLength(0)

    const numberToSelect = wrapper.find('PlayNumbers').find('Number').first()

    expect(numberToSelect.text()).toEqual('1')

    numberToSelect.simulate('click')

    // check that clicking the number to select add it to the selected ones
    let selectedNumbers = wrapper.find('SelectedNumbers').find('Number')
    expect(selectedNumbers).toHaveLength(1)

    // and remove it from the ones to select
    expect(wrapper.find('PlayNumbers').find('Number')).toHaveLength(8)

    // remove selectNumber from the selected Number box
    wrapper.find('SelectedNumbers').find('Number').similute('click')
    const checkButton = wrapper.find('CheckButton')

    // expect(wrapper.find('Numbers').first()).to.equal(1);
    // wrapper.find('a').simulate('click');
    // expect(wrapper.find('.clicks-1').length).to.equal(1);
  })
})
