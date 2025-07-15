"use client"

import { addTodo } from '@/action'
import React from 'react'

export default function ClientButton({ children }: { children: React.ReactNode }) {
  return (
    <button className='border p-2 ml-2' onClick={async () => {
      const formData = new FormData()
      formData.append("todo", "疲惫")
      await addTodo(formData)
    }}>{children}</button>
  )
}
