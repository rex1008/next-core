"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter()

  return (
    <div>
      <nav>
        {/* <Link href="/news">新闻</Link>
        <Link href="/sports">体育</Link> */}
        <span onClick={() => {
          router.push("/news")
          router.refresh()
        }}>新闻</span>
        <span onClick={() => {
          router.push("/sports")
          router.refresh()
        }}>体育</span>
      </nav>
      {children}
    </div>
  );
}
