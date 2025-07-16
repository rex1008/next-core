import SnippetEditForm from '@/components/snippet-edit-form'
import { db } from '@/db'
import { sleep } from '@/utils'
import { notFound } from 'next/navigation'
import React from 'react'

interface SnippetShowPageProps {
  params: { id: string }
}

export default async function Page(props: SnippetShowPageProps) {
  await sleep(1000)
  const id = props.params.id
  const snippet = await db.snippet.findFirst({
    where: { id: +id }
  })
  console.log("get snippet", snippet)
  if (!snippet) {
    return notFound()
  }
  return (
    <SnippetEditForm snippet={snippet} />
  )
}
