import React from 'react'
import ReactDOM from 'react-dom'
import CheckButton from './CheckButton'
import { Button } from 'react-bootstrap';
import { mount, shallow } from 'enzyme'

describe('CheckButton', () => {
  it('renders the button', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CheckButton  />, div)
  })

  const answerIsCorrect = null
  const wrapper = mount(<CheckButton answerIsCorrect={answerIsCorrect} />)
  it('asks to check the given selection', () => {
    expect(wrapper.text()).toEqual('Play some numbers')
  })

  describe('when the answer is correct', () => {
    const answerIsCorrect = true
    const wrapper = mount(<CheckButton answerIsCorrect={answerIsCorrect} />)

    it('returns the success button', () => {
      expect(wrapper.find('.fa-check')).toBePresent()
    })
  })

  describe('when the answer is not correct', () => {
    const answerIsCorrect = false
    const wrapper = mount(<CheckButton answerIsCorrect={answerIsCorrect} />)

    it('returns the insuccess button', () => {
      expect(wrapper.find('.fa-times')).toBePresent()
    })
  })
})
