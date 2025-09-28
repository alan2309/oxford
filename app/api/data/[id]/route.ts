// app/api/chapters/[chapterId]/route.ts
import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function PUT(
  req: Request,
  context: { params: Promise<{ chapterId: string }> }
) {
  try {
    const { chapterId } = await context.params
    const body = await req.json()

    if (!chapterId || !body.updates) {
      return NextResponse.json(
        { success: false, message: "chapterId and updates are required" },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db("your_database_name") // Replace with actual DB name

    // Dynamic import
    const { ObjectId } = await import('mongodb')

    const result = await db.collection("chapters").updateOne(
      { 
        "_id": new ObjectId("68d83b4b8172af226ec67659"), // Your main document ID
        "data._id": chapterId 
      },
      { 
        $set: Object.fromEntries(
          Object.entries(body.updates).map(([key, value]) => [
            `data.$[elem].${key}`, value
          ])
        )
      },
      { 
        arrayFilters: [{ "elem._id": chapterId }] 
      }
    )

    if (result.modifiedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Chapter not found or no changes made" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Chapter updated successfully'
    })
  } catch (error) {
    console.error("Update error:", error)
    return NextResponse.json(
      { success: false, message: "Update failed" },
      { status: 500 }
    )
  }
}