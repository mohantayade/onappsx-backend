import mongoose from 'mongoose';

// Schema for likes
const likeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

// Schema for comments
const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

// Main schema for apps
const appsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    logo:{
        type: String
    },
    title: {
        type: String,
        required: true
    },
    link: {
        type: String
    },
    discription: {
        type: String
    },
    createdBy: {  // Field to store the user who created the app
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    likes: [likeSchema],  // Embedding the like schema as an array
    comments: [commentSchema]  // Embedding the comment schema as an array
}, { timestamps: true });



// Creating the model
const Apps = mongoose.model('apps', appsSchema);

export default Apps;
