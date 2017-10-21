import React from 'react'
import Star from './Star'

const Stars = (props) => {
  return(
    <div className="Stars">
      { props.starsNumber.map((i) => <Star key={i} />) }
    </div>
  )
}

export default Stars
