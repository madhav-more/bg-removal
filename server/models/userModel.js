// models/userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  clerlId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  creditBalance: { type: Number, default: 5 }
});

const UserModel = mongoose.models.User || mongoose.model('User', userSchema);

export default UserModel;

