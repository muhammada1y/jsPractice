import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import dbConnection from './db.js';
import bodyParser from 'body-parser'; // Import body-parser using require
import cors from 'cors';
import router from './route/route.js';
const app = express();
const port = process.env.PORT || 3000;

// Connect to the database
dbConnection();

app.use(bodyParser.json()); // Use bodyParser.json() instead of json()
app.use(cors());

// Routes
app.use('/customer', router);

app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
});