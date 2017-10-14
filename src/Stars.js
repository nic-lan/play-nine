import ReactDOM from 'react-dom';
import React from 'react';

const Stars = (props) => {
  const starsNumberArray = new Array(props.starsNumber)
  return(
    <div className="Stars">
      { starsNumberArray.map((i) =>
        <i key={i} className="fa fa-star  fa-2x"></i>
      )}
    </div>
  )
}

export default Stars;
