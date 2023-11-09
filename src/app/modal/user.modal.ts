import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  email: string;
  password?: string;
}

const userSchema: Schema<IUser> = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User as mongoose.Model<IUser> || mongoose.model<IUser>("User", userSchema);
