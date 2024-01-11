'use client'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { FiPlay, FiPause, FiSettings } from 'react-icons/fi'
import { Button } from './ui/button'

const red = '#f54e4e'
const green = '#4aec8c'

const PomodoroTimer = () => {
  return (
    <div>
      <CircularProgressbar
        value={60}
        text={`60%`}
        styles={buildStyles({
          rotation: 1,
          strokeLinecap: 1,
          textColor: '#fff',
          pathColor: red,
          trailColor: '',
        })}
      />
      <div>
        <Button
          variant="destructive"
          className="text-white text-3xl rounded-full m-3 px-2 py-5 border-4 "
        >
          <FiPlay />
        </Button>
        <Button className="text-white text-3xl rounded-full m-3 px-2 py-5 border-4 ">
          <FiPause />
        </Button>
      </div>
      <div className="mt-3">
        <Button variant="outline" className="text-black">
          <FiSettings />
          Settings
        </Button>
      </div>
    </div>
  )
}

export default PomodoroTimer
