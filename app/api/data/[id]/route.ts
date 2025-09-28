// app/api/data/[id]/route.ts
import { NextResponse } from "next/server"
import { ObjectId } from "mongodb" // 👈 import this
import clientPromise from "@/lib/mongodb" // example: your MongoDB connection util

export async function PUT(
  req: Request,
   { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const body = await req.json()

    const client = await clientPromise
    const db = client.db("chapters")

    const updated = await db.collection("chapter").updateOne(
      { _id: new ObjectId(id) }, // 👈 convert string -> ObjectId
      { $set: body }
    )
    return NextResponse.json({ success: true, data: updated })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, message: "Update failed" },
      { status: 500 }
    )
  }
}
