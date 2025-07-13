"use client"

import React, { useState } from 'react'

export default function ClientComponent({ children }: { children: React.ReactNode }) {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={e => increment()}>+1</button>

      {children}
    </div>
  )
}
