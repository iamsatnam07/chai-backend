import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        const connectionInst = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("MongoDB connected", connectionInst.connection.host);
    }
    catch (error) {
        console.log("MongoDB not able to connect",error);
    }
}

export default connectDB;