'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useState } from 'react'
import { FiAlignJustify } from 'react-icons/fi'
import { Button } from './ui/button'
import Link from 'next/link'

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <FiAlignJustify
            onClick={() => {
              setIsOpen(!isOpen)
            }}
            className="text-5xl"
          />
        </SheetTrigger>
        <SheetContent
          onEscapeKeyDown={() => {
            setIsOpen(false)
          }}
          side="left"
          className="flex flex-col h-screen justify-between"
        >
          <SheetHeader>
            <SheetTitle asChild>
              <Button variant="ghost">Logo</Button>
            </SheetTitle>
            <Button variant="secondary">Home</Button>
            <Button variant="secondary">Notas</Button>
            <Link href={'/pomodoro'}>Pomodoro</Link>
            <Button variant="secondary">Cronometro</Button>
            <Button variant="secondary">Calendario</Button>
            <Button variant="secondary">Alarma</Button>
          </SheetHeader>
          <SheetClose className="border-t pt-3">Cerrar</SheetClose>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default SideMenu
