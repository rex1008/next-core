import Link from "next/link";
import { Suspense } from "react";
import NavigationEvents from "../components/navigation-events";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>
      <nav>
        <Link href="/news">新闻</Link>
        <Link href="/sports">体育</Link>
      </nav>
      {children}
      <Suspense fallback={null}>
        <NavigationEvents/>
      </Suspense>
    </div>
  );
}
