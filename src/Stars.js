import React from 'react';

const Stars = (props) => {
  let starsNumberArray = []

  for( var i = 0; i < props.starsNumber; i ++ ) {
    starsNumberArray.push(i)
  }

  return(
    <div className="Stars">
      { starsNumberArray.map((i) => <i key={i} className="fa fa-star fa-2x"></i>) }
    </div>
  )
}

export default Stars;
