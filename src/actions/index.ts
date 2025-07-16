"use server"

import { db } from "@/db"
import { redirect } from "next/navigation"

export async function deleteSnippet(id: number) {
  console.log("删除", id)
  await db.snippet.delete({
    where: { id }
  })

  redirect("/")
}

export async function deleteSnippet2(id: number) {
  console.log("删除", id)
  await db.snippet.delete({
    where: { id }
  })

  redirect("/")
}

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code }
  })

  redirect("/snippets/" + id)
}

export async function createSnippet(prevState: { message: string }, formData: FormData) {
  "use server"

  const title = formData.get("title") as string
  const code = formData.get("code") as string
  if (typeof title !== "string" || title.length < 3) {
    return {
      message: "title must be longer than 3 characters"
    }
  }
  if (typeof code !== "string" || code.length < 3) {
    return {
      message: "code must be longer than 3 characters"
    }
  }
  
  const data = await db.snippet.create({
    data: {
      title,
      code
    }
  })
  console.log(data)

  redirect("/")
}