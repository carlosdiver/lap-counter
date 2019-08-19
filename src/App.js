import React, { useState, useEffect } from 'react'
import './style.css'
import ShowRep from './ShowReps'
import ShowTime from './ShowTime'
import Button from './button'

function App () {
  const [numReps, setNumReps] = useState(0)
  const [running, setRunning] = useState(false)
  const [time, setTime] = useState(0)

  useEffect(() => {
    let timer = null
    if (running) {
      timer = setInterval(() => {
        setTime(old => old + 1)
      }, 1000)
    }
    return () => {
      if (timer) { // truthy - valor que é convertido para verdadeiro
        clearInterval(timer)
      }
    }
  }, [running])

  const toggleRunning = () => {
    setRunning(!running)
  }

  const increment = () => {
    setNumReps(numReps + 1)
  }
  const decrement = () => {
    numReps > 0 && setNumReps(numReps - 1)
  }

  const reset = () => {
    setNumReps(0)
    setTime(0)
  }

  const stop = () => {
    setRunning(false)
  }
  return (
    <div>
      <h1>Lap Counter</h1>
      <ShowRep voltas={numReps} />
      <div className='signals'>
        <Button text='+' onClick={increment} />
        <Button text='-' onClick={decrement} />
      </div>
      <p>{time === 0 && numReps === 0 ? <strong className='zero'>00:00</strong> : <ShowTime time={time} />}</p>
      <p className='totalTime'>Total time</p>
      <div className='buttonAction'>
        <Button onClick={toggleRunning} text={running ? 'Pause' : 'Start'} />
        <Button onClick={reset} text='Reset' />
      </div>

      {stop && numReps > 0 ? <p><ShowTime time={Math.floor(time / numReps)} /> <br /><span className='totalTime'>Average time per lap</span></p>
        : <p className='noLap'>No lap</p>
      }

      <p className='author'><small>By Carlos Eduardo Silva</small></p>
    </div>
  )
}

export default App
