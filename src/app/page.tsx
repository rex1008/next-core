import React from 'react'

const fetchImg = async () => {
  const r = await fetch("https://dog.ceo/api/breeds/image/random", {
    next: {
      tags: ["dog"]
    }
  })
  return r.json()
}

export default async function Page() {
  const dog = await fetchImg()
  console.log("渲染一次")
  return (
    <div>
      <img src={dog.message} width={300} />
    </div>
  )
}