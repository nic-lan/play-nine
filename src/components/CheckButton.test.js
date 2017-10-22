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


  it('asks to check the given selection', () => {
    const answerIsCorrect = null
    const wrapper = mount(<CheckButton answerIsCorrect={answerIsCorrect} />)
    const buttonTag = '<button type="button" class="btn btn-default">Check Selection</button>'
    expect(wrapper.html()).toEqual(buttonTag)
  })

  describe('when the answer is correct', () => {
    const answerIsCorrect = true
    const wrapper = mount(<CheckButton answerIsCorrect={answerIsCorrect} />)

    it('returns the success button', () => {
      const buttonTag = <Button><i className="fa fa-check fa-2x"/></Button>

      expect(wrapper).toContainReact(buttonTag)
    })
  })

  describe('when the answer is not correct', () => {
    const answerIsCorrect = false
    const wrapper = mount(<CheckButton answerIsCorrect={answerIsCorrect} />)

    it('returns the insuccess button', () => {
      const buttonTag = <Button disabled><i className="fa fa-times fa-2x"/></Button>

      expect(wrapper).toContainReact(buttonTag)
    })
  })
})
