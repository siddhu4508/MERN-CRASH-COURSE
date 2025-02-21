import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept json date in the req.body acts as middleware

app.post('/api/products', async (req, res) => {
    const product = req.body; // user will send this data
    
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success:false, message: "Please provide all fields"});
    }

    const newProduct = new Product(product);
    
    try {
        await newProduct.save();
        res.status(200).json({ success:true, data: newProduct});
    } catch (error) {
        console.error("Error in Creating Product:", error.message);
        res.status(500).json({ success:false, message: "Server Error"});
    }
});

app.delete("/api/products/:id", async (req, res) => {
    const {id} = req.params;
    
    try {
        await Product.findByIdAndDelete
    } catch (error) {
        
    }
});
 

app.listen(5000, () => {
    connectDB();
    console.log('Server is running on port 5000');
})


