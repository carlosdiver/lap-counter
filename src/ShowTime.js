import React from 'react'

const ShowTime = (props) => {
  const time = props.time
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  const minutesStr = minutes < 10 ? '0' + minutes : minutes
  const secondsStr = seconds < 10 ? '0' + seconds : seconds
  return (
    <span className='time'>
      <span>{`${minutesStr}:${secondsStr}`}</span>
    </span>
  )
}

export default ShowTime
