import mongoose from'mongoose'

// Connect to the database
export const connectDB = async () => {
    await mongoose.connect('<Enter your mongodb uri here>/full_stack_blog_website_db')
    console.log('DB connected successfully')
}