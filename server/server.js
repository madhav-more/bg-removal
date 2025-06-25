import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';

// App config
const PORT = process.env.PORT || 4000;
const app = express();
await connectDB()

// Initialize middlewares
app.use(express.json());
app.use(cors());

// API route
app.get('/', (req, res) => {
  res.send('API is working fine ✅');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
