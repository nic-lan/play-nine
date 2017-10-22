import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { mount } from 'enzyme'
import Button from 'react-bootstrap'

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const wrapper = <App />
    ReactDOM.render(wrapper, div)
  })

  const wrapper = mount(<App />)

  const find_numbers = (number_component) => {
    return wrapper.find(number_component).find('Number')
  }

  const click_button = () => {
    wrapper.find('CheckButton').simulate('click')
  }

  it('plays nine', () => {
    // check initial number of rendered stars
    const starsNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    expect(wrapper.find('Star')).toHaveLength(starsNumber.length)

    // check initial rendered PlayNumbers
    expect(find_numbers('PlayNumbers')).toHaveLength(9)

    // check initial rendered SelectedNumbers
    expect(find_numbers('SelectedNumbers')).toHaveLength(0)

    expect(wrapper.find('CheckButton').text()).toEqual('Check Selection')

    const numberToSelect = find_numbers('PlayNumbers').first()
    expect(numberToSelect.text()).toEqual('1')

    numberToSelect.simulate('click')

    // check that clicking the number to select add it to the selected ones
    let selectedNumbers = find_numbers('SelectedNumbers')
    expect(selectedNumbers).toHaveLength(1)

    // and remove it from the ones to select
    const playNumbers = find_numbers('PlayNumbers')
    expect(playNumbers).toHaveLength(8)
    expect(playNumbers.map(i => i.text())).not.toContain('1')

    // check that button shows that the answer is not correct
    expect(wrapper.find('CheckButton').find('.fa-times')).toBePresent()

    // // remove selected Number from the selected Number box
    find_numbers('SelectedNumbers').first().simulate('click')
    expect(find_numbers('SelectedNumbers')).toHaveLength(0)
    // // and it back to the play ones
    expect(find_numbers('PlayNumbers')).toHaveLength(9)

    expect(wrapper.find('CheckButton').text()).toEqual('Check Selection')
    // click_button()


    // click_button()



    // expect(wrapper.find('Numbers').first()).to.equal(1);
    // wrapper.find('a').simulate('click');
    // expect(wrapper.find('.clicks-1').length).to.equal(1);
  })
})
