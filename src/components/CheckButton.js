import React from 'react'
import { Button } from 'react-bootstrap'

const SuccessButton = () => {
  return( <Button><i className="fa fa-check fa-2x"/></Button> )
}

const InvalidButton = () => {
  return( <Button disabled><i className="fa fa-times fa-2x"/></Button> )
}

const CheckButton = (props) => {
  let buttonTag = null

  switch(props.answerIsCorrect) {
    case true:
      buttonTag = <SuccessButton />
      break

    case false:
      buttonTag = <InvalidButton />
      break

    default:
      buttonTag = <Button onClick={() => props.checkAnswer()}>Check Selection</Button>
  }

  return( buttonTag )
}

export default CheckButton
