"use client"

import React, { useEffect, useState } from 'react'

export default function Page() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const r = await fetch("http://localhost:3000/api/todos")
      const { data } = await r.json()
      // console.log(data)
      setTodos(data)
    }
  
    fetchData()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const r = await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      body: new FormData(e.currentTarget)
    })
    const { data } = await r.json()
    setTodos(data)
  }

  return (
    <div className='p-10'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" name='todo' className='border p-2' />
          <button type='submit' className='border p-2 ml-2'>提交</button>
        </form>
        <ul className='leading-8 mt-4'>
          {
            todos.map((todo, index) => {
              return <li key={index}>{todo}</li>
            })
          }
        </ul>
    </div>
  )
}
