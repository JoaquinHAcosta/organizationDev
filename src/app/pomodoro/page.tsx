import PomodoroTimer from '@/components/PmdrTimer'
import SettingsContext from '@/contexts/pmdrContext'
import React from 'react'

const PomodoroPage = () => {
  return (
    <div className="text-[#eee] bg-[#30384b] pt-10 h-[90vh] w-screen my-0 mx-auto flex justify-center items-center text-center ">
      <SettingsContext.Provider value={{ workMinutes: 45, breakMinutes: 15 }}>
        <PomodoroTimer />
      </SettingsContext.Provider>
    </div>
  )
}

export default PomodoroPage
