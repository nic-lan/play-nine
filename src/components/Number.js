import React from 'react'

const Number = (props) => {
  return (
    <span onClick={ () => props.handleClick(props.number) }>
      { props.number }
    </span>
  )
}

export default Number
