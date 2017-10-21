import React from 'react';

const Stars = (props) => {
  return(
    <div className="Stars">
      { props.starsNumber.map((i) => <i key={i} className="fa fa-star fa-2x" />) }
    </div>
  )
}

export default Stars;
