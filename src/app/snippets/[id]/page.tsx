import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <>
      <div className='flex items-center justify-between mt-10'>
        <h1 className='font-bold text-lg'>Function</h1>
        <div className='flex gap-4'>
          <Link href="/snippet/1/edit" className='p-2 border border-teal-500 rounded'>Edit</Link>
          <button className='p-2 border border-teal-500 rounded'>Delete</button>
        </div>
      </div>
      <pre>
        <code>123</code>
      </pre>
    </>
  )
}
