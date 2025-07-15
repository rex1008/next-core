"use client"

import { addTodo } from '@/action'
import React from 'react'
import { useFormState } from 'react-dom'
import SubmitButton from './submit-button'
import ClientButton from './client-button'

const initialState = {
  message: ""
}

export default function SubmitForm() {
  const [state, formAction] = useFormState(addTodo, initialState)

  return (
    <>
      <div className="flex">
        <form action={formAction}>
          <input type="text" name='todo' className='border p-2' />
          <SubmitButton/>
        </form>
        <ClientButton>疲惫</ClientButton>
      </div>
      <p className='mt-2 text-teal-500 text-sm'>{state.message}</p>
    </>
  )
}
