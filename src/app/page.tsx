import { db } from '@/db'
import Link from 'next/link'
import React from 'react'

export default async function Page() {
  const snippets = await db.snippet.findMany()
  console.log(snippets)

  return (
    <>
      <div className='flex justify-between items-center mt-5'>
        <h1 className='font-bold text-lg'>Snippets</h1>
        <Link className='p-2 border border-teal-500 rounded' href="/snippets/new">New</Link>
      </div>
      <div className='flex flex-col gap-2 mt-5'>
        {
          snippets.map(snippet =>
            <Link href={`/snippets/${snippet.id}`} className='flex justify-between items-center border border-teal-500 p-2 rounded'>
              <span>{snippet.title}</span>
              <span>View</span>
            </Link>)
        }
      </div>
    </>
  )
}
