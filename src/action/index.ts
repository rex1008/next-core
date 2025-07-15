"use server"

import { revalidatePath } from "next/cache"

import { z } from 'zod'

const schema = z.string().min(2, { message: "Must be 2 or more characters long" }).max(5, "Must be 5 or fewer characters long")

const data = ["吃饭", "睡觉", " 打豆豆"]

export async function getTodos() {
  console.log("获取todos")
  return data
}

export async function addTodo(prevState: { message: string }, formData: FormData) {
  // console.log("userId", userId)

  // 获取表单数据方式1
  const todo = formData.get("todo") as string

  // 校验长度等
  const validataFields = schema.safeParse(todo)
  if (!validataFields.success) {
    return {
      message: validataFields.error.flatten().formErrors.toString()
    }
  }

  // 获取表单数据方式2
  const rawFormData = Object.fromEntries(formData)
  console.log("提交的表单数据", rawFormData)

  data.push(todo)

  console.log("添加后的数据", data)

  // 重新验证缓存
  revalidatePath("/")

  return {
    ...prevState,
    message: `add ${todo} success!`
  }
  
}