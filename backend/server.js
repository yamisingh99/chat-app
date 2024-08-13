const express = require('express');
const { chats } = require('./data/data');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const connectDB= require("./config/db")
const userRoutes = require('./routes/userRoutes');
connectDB()

const app = express();
app.use(express.json()); //to accept json data
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // Logger

// Routes
app.get("/", (req, res) => {
    res.send("API is running");
});

app.use('/',(req,res)=>{
    res.send("API is running");
});

app.use('./api/user',userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
