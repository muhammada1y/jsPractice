import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const dbConnection = async () => {
        try {
                const connectWithDb = await mongoose.connect(process.env.DB_URL, {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                });
                console.log(`Connection status success: ${connectWithDb.connection.host}`);
        } catch (error) {
                console.error('Database connection failed', error);
                process.exit(1); // Exit process with failure
        }
};

export default dbConnection;
