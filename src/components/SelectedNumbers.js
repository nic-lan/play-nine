import React from 'react'
import Number from './Number'

const SelectedNumbers = (props) => {
  return (
    <div className="SelectedNumbers">
      { props.selectedNumbers.map(i => <Number key={i} number={i} />) }
    </div>
  )
}

export default SelectedNumbers
