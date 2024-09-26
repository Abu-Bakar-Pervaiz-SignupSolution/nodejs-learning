import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    Password: {
      type: String,
      required: true,
      min: 4
    },
  },
  {
    timestamps: true
  }
)

export const User = mongoose.model("User", userSchema)