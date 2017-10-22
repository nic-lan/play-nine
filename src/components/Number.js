import React from 'react'

const Number = (props) => {
  return (
    <span onClick={ () => props.selectNumber(props.number) }>
      { props.number }
    </span>
  )
}

export default Number
