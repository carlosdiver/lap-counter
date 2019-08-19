import React from 'react'

const ShowReps = (props) => {
  return (
    <div>
      <p>
        <span className='repsNum'>{props.voltas}</span>
      </p>
      <p>
        <span className='repsText'>{props.voltas <= 1 ? 'lap' : 'laps'}</span>
      </p>
    </div>
  )
}

export default ShowReps
