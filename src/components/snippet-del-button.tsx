"use client"

import { deleteSnippet } from '@/actions'
import React, { startTransition } from 'react'

export default function SnippetDelButton(props: { id: number }) {
  const handleDelete = () => {
    startTransition(async () => {
      await deleteSnippet(props.id)
    })
  }

  return (
    <div>
      <button className='p-2 border border-teal-500 rounded' onClick={() => handleDelete()}>Delete</button>
    </div>
  )
}
