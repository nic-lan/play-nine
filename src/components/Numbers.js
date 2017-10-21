import React from 'react'
import Number from './Number'

const Numbers = (props) => {
  return (
    <div className="Numbers">
      { props.numbers.map(i => <Number key={i} number={i} />) }
    </div>
  )
}

export default Numbers
