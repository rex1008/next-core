import React from 'react'

const fetchImg = async () => {
  const { signal } = new AbortController()
  const r = await fetch("https://dog.ceo/api/breeds/image/random", {
    signal,
    cache: "no-cache"
  })
  return r.json()
}

export default async function page() {
  // await headers() 动态函数调用会使 fetch 不走默认的缓存行为

  const image1 = await fetchImg()
  const image2 = await fetchImg()
  const image3 = await fetchImg()
  console.log("渲染一次")

  return (
    <div>
      <img src={image1.message} width={200} />
      <img src={image2.message} width={200} />
      <img src={image3.message} width={200} />
    </div>
  )
}
