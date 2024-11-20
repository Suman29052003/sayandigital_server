const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const connectDB = require('./config/database');
const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require('./routes/user.route');
// Middleware
app.use(cors({
  origin: ['https://sayandigital.vercel.app', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', userRoutes);

// Test route
// app.get('/', (req, res) => {
//   res.json({ message: 'Welcome to the Express server!' });
// });

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 