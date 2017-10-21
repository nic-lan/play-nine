import React from 'react'
import Number from './Number'
import { shallow } from 'enzyme';

describe('Star', () => {
  it('i div', () => {
    const wrapper = shallow(<Number number={2}/>)

    expect(wrapper.find('span').length).toEqual(1)
    expect(wrapper.text()).toEqual("2")
  })
})
