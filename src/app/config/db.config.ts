import { connect } from "mongoose";

export default async function dbcon() {
  try {
    const db = await connect('mongodb+srv://meshvishah:SEEP3EbKb3-fVrk@cluster0.otrcfmp.mongodb.net/?retryWrites=true&w=majority/t');
    console.log( "sucess")
    return db;
  } catch (error) {
    throw Error("Error while attempting to connect to database.");
  }
}