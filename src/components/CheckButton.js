import React from 'react'
import { Button } from 'react-bootstrap'

const CheckButton = (props) => {
  let buttonTag = null

  switch(props.answerIsCorrect) {
    case true:
      buttonTag = <Button onClick={() => props.storeAnswer()}>
        <i className="fa fa-check fa-2x"/>
      </Button>
      break

    case false:
      buttonTag = <Button disabled><i className="fa fa-times fa-2x"/></Button>
      break

    default:
      buttonTag = <Button disabled>Play some numbers</Button>
  }

  return( buttonTag )
}

export default CheckButton
