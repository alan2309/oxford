import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db(process.env.MONGODB_DB)
    
    // Fetch all documents from the chapters collection
    const chapters = await db.collection('chapter').find({}).toArray()
    
    // Convert ObjectId to string for JSON serialization
    const serializedChapters = chapters.map(chapter => ({
      ...chapter,
      _id: chapter._id.toString()
    }))
    
    return NextResponse.json({
      success: true,
      data: serializedChapters,
      count: serializedChapters.length
    })
  } catch (error) {
    console.error('Error fetching chapters:', error)
    return NextResponse.json(
      { 
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}