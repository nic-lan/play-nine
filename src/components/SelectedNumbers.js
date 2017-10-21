import React from 'react'

const Numbers = (props) => {
  return (
    <div className="Numbers">
      { props.selectedNumbers.map(i => <span key={i}>{ i }</span>) }
    </div>
  )
}

export default Numbers
