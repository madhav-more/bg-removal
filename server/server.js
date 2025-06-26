import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import userModel from './models/userModel.js'; // ✅ Make sure to import this
import userRouter from './routes/userRoutes.js';

const PORT = process.env.PORT || 4000;
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// ✅ Connect DB
await connectDB(); // ✅ Only if you're using `"type": "module"` in package.json

// Test route
app.get('/', (req, res) => {
  res.send('API is working fine ✅');
});
app.use('api/user' , userRouter)

// ✅ POST route to add a person & delete it after user is getting addded from userlogin
app.post('/person', async (req, res) => {
  try {
    const { clerlId, email, photo, firstName, lastName, creditBalance } = req.body;

    if (!clerlId || !email || !photo) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newUser = await userModel.create({
      clerlId,
      email,
      photo,
      firstName,
      lastName,
      creditBalance,
    });

    res.status(201).json({ message: "User added successfully", user: newUser });
  } catch (error) {
    console.error("Error in /person route:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});



// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

