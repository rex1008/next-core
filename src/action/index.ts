"use server"

import { revalidatePath } from "next/cache"

const data = ["吃饭", "睡觉", " 打豆豆"]

export async function getTodos() {
  console.log("获取todos")
  return data
}

export async function addTodo(userId: string, formData: FormData) {
  console.log("userId", userId)

  // 获取表单数据方式1
  const todo = formData.get("todo") as string

  // 获取表单数据方式2
  const rawFormData = Object.fromEntries(formData)
  console.log("提交的表单数据", rawFormData)

  data.push(todo)

  console.log("添加后的数据", data)

  // 重新验证缓存
  revalidatePath("/")
  
}