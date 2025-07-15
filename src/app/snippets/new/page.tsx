import { db } from '@/db'
import React from 'react'

export default function Page() {
  async function createSnippet(formData: FormData) {
    "use server"

    const title = formData.get("title") as string
    const code = formData.get("code") as string
    
    const data = await db.snippet.create({
      data: {
        title,
        code
      }
    })
    console.log(data)
  }


  return (
    <form action={createSnippet}>
      <h3 className='font-bold m-3 text-center'>Create a Sinppet</h3>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor="title">Title</label>
          <input name='title' className='border border-teal-500 p-2 rounded w-full' type="text" id='title' />
        </div>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor="code">Code</label>
          <input name='code' className='border border-teal-500 p-2 rounded w-full' type="text" id='code' />
        </div>
        <button className='rounded p-2 bg-blue-200' type='submit'>Create</button>
      </div>
    </form>
  )
}
