'use client'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { FiPlay, FiPause, FiSettings } from 'react-icons/fi'
import { Button } from './ui/button'
import PmdrSettings from './PmdrSettings'

const red = '#f54e4e'
const green = '#4aec8c'

const PomodoroTimer = () => {
  return (
    <div className="max-w-80">
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
          variant="outline"
          className="text-3xl rounded-full m-3 px-3 py-5  "
        >
          <FiPlay />
        </Button>
        <Button className="text-white text-3xl rounded-full m-3 px-3 py-5">
          <FiPause />
        </Button>
      </div>
      <div className="flex justify-center mx-auto">
        <PmdrSettings />
      </div>
    </div>
  )
}

export default PomodoroTimer
