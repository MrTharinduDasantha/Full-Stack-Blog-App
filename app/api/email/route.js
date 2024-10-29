import { connectDB } from '@/lib/config/db'
import emailModel from '@/lib/models/EmailModel'
import { NextResponse } from 'next/server'

// Load database connection
const loadDB = async () => {
    await connectDB()
}

// Load database connection on server start
loadDB()

// Api endpoint for sending email
export async function POST(request) {
    const formData = await request.formData()
    const emailData = {
        email: `${formData.get('email')}`
    }
    await emailModel.create(emailData)
    return NextResponse.json({ success: true, message: 'Email Sent Successfully' })
}

// Api endpoint to get all emails
export async function GET(request) {
    const emails = await emailModel.find({})
    return NextResponse.json({ emails })
}

// Api endpoint for deleting email
export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id')
    await emailModel.findByIdAndDelete(id)
    return NextResponse.json({ success: true, message: 'Email Deleted Successfully' })
}