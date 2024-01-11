'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { FiSettings } from 'react-icons/fi'
import { Label } from './ui/label'
import { Slider } from './ui/slider'

const PmdrSettings = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-black">
          <FiSettings className="text-lg mr-1" />
          Settings
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[300px] md:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Pomodoro Timer Settings</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 items-center gap-4">
            <Label htmlFor="work_minutes" className="text-right col-span-1">
              Work Minutes:
            </Label>
            <Slider defaultValue={[33]} max={100} step={1} />
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <Label htmlFor="break_minutes" className="text-right">
              Break Minutes:
            </Label>
            <Slider defaultValue={[33]} max={100} step={1} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default PmdrSettings
