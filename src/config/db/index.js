import mongoose from 'mongoose';

const db = {
    connect: async () => {
        try {
            await mongoose.connect('mongodb://localhost:27017/blog_dev');
            console.log('connect successfully');
        } catch (error) {
            throw new Error(error);
        }
    },
};

export default db;
