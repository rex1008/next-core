import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";


  export function GET(request: NextRequest) {
    const path = request.nextUrl.searchParams.get("path")
    const tag = request.nextUrl.searchParams.get("tag")

    if(path) {// 模拟按需
      revalidatePath(path)
      return NextResponse.json({ revalidated: true, time: Date.now() })
    }

    if(tag) {// 模拟按需
      revalidateTag(tag)
      return NextResponse.json({ revalidated: true, time: Date.now() })
    }

    return NextResponse.json({ revalidated: false, time: Date.now() })
  }