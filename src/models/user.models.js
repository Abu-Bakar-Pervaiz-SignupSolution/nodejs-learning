import mongoose, { Schema } from "mongoose"
import jwt from "jsonwebtoken"

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      index: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true
    },
    avatar: {
      type: String,
      required: true
    },
    coverImage: {
      type: String,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video"
      }
    ],
    password: {
      type: String,
      required: [true, "Password is Requird"],
      min: 6
    },
    refreshToken: {
      type: String
    }
  },
  { timestamps: true }
)

userSchema.pre("save", async function(next){
  if(this.isModified("password")){
    this.password = bcrypt.hash(this.password, 10)
  }
  return next()
})

userSchema.methods.isPasswordCorrect = async function(password) {
  return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)