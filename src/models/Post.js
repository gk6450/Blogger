import mongoose from "mongoose";

const { Schema } = mongoose;

let Post;

try {
  Post = mongoose.model("Post"); // Try to retrieve an existing model
} catch (error) {
  // Model doesn't exist, define it
  const postSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  Post = mongoose.model("Post", postSchema); // Compile the model
}

export default Post;
