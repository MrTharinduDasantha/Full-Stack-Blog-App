import mongoose from'mongoose'

// Create a schema for the blog model
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    authorImg: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

// Create a model for the blog schema
const blogModel = mongoose.models.blog || mongoose.model('blog', blogSchema)

export default blogModel