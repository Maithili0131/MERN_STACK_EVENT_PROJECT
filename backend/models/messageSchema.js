import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must contain at least 3 characters"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Please provide a valid email"],
  },

  subject: {
    type: String,
    required: [true, "Subject is required"],
    minlength: [5, "Subject must contain at least 5 characters"],
  },

  message: {
    type: String,
    required: [true, "Message is required"],
    minlength: [10, "Message must contain at least 10 characters"],
  },
});

export default mongoose.model("Message", messageSchema);
