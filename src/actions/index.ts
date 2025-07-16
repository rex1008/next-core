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