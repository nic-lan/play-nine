import React from 'react'
import Number from './Number'

const SelectedNumbers = (props) => {
  return (
    <div className="SelectedNumbers">
      { props.selectedNumbers.map(i =>
          <Number
            key={i}
            number={i}
            handleClick={props.unselectNumber}
          />
      )}
    </div>
  )
}

export default SelectedNumbers
