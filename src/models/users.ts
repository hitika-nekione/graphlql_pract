// Mongoose model
import mongoose, { Schema, Document } from "mongoose"

interface User extends Document {
  uid: string
  email: string
  fullname: string
  bio: string
  password: string
  phone: string
  dialCode: string
  age: number
  image: string
  verified: boolean
}

const UserSchema = new mongoose.Schema({
  uid: { type: String, unique: true, required: true },
  fullname: { type: String, required: true },
  bio: { type: String },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  dialCode: {
    type: String,
  },
  image: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  age: {
    type: Number,
    min: 1,
    max: 100,
  },
})

export default mongoose.model<User>("users", UserSchema)
