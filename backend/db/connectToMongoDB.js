import mongoose from "mongoose";

const connectToMongoDb = async () => {
    try {
        // @ts-ignore
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDb");
    }
    catch (error) {
        console.log("Error connecting to MongoDB", error.message)
    }
};

export default connectToMongoDb;