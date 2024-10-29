import mongoose from'mongoose'

// Create a schema for the email model
const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

// Create a model for the email schema
const emailModel = mongoose.models.email || mongoose.model('email', emailSchema)

export default emailModel