import { connect } from "mongoose";

export default async function dbcon() {
  try {
    const db = await connect('mongodb+srv://shahmeshvi1011:6aFHHuWXoEw8mzlq@cluster0.3iqyzgv.mongodb.net/file_managment');
  
    return db;
  } catch (error) {
    throw Error("Error while attempting to connect to database.");
  }
}