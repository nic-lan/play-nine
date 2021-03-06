import React from 'react'
import Number from './Number'

const PlayNumbers = (props) => {
  return (
    <div className="PlayNumbers">
      { props.numbers.map(i =>
          <Number
            key={i}
            number={i}
            handleClick={props.selectNumber}
          />
      )}
    </div>
  )
}

export default PlayNumbers
