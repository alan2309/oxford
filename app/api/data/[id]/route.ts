// app/api/data/[id]/route.ts
import { NextResponse } from "next/server"
import { ObjectId } from "mongodb"
import clientPromise from "@/lib/mongodb"

export async function PUT(
  req: Request,
  context: { params: { id: string } } // ✅ no Promise
) {
  try {
    const { id } = context.params
    const body = await req.json()

    const client = await clientPromise
    const db = client.db("chapters")

    const updated = await db.collection("chapter").findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: body },
      { returnDocument: "after" } // 👈 return updated doc
    )

    return NextResponse.json({ success: true, data: updated?.value })
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error("Update failed", error)
    }

    return NextResponse.json(
      { success: false, message: "Update failed" },
      { status: 500 }
    )
  }
}
