import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Course = new Schema(
    {
        name: { type: String, maxLength: 255 },
        description: { type: String },
        image: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model('Course', Course);
