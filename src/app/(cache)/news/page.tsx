import { sleep } from '@/utils'
import React from 'react'

export const dynamic = "force-dynamic"

export default async function Page() {
  // 模拟加载
  await sleep(3000)
  return (
    <div>
      新闻：{ new Date().toLocaleTimeString() }
    </div>
  )
}
