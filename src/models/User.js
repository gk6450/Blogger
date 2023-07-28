import mongoose from "mongoose";

const { Schema } = mongoose;

let User;

try {
  User = mongoose.model("User"); // Update variable name to User
} catch (error) {
  const userSchema = new Schema(
    {
      name: {
        type: String,
        unique: true,
        required: true,
      },
      email: {
        type: String,
        unique: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
  User = mongoose.model("User", userSchema); // Compile the model
}

export default User;
