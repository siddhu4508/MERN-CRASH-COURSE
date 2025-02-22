import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept json date in the req.body acts as middleware


 



app.listen(5000, () => {
    connectDB();
    console.log('Server is running on port 5000');
})


