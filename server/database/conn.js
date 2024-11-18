import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import ENV from '../config.js'
import e from "express";

var mongoURL = 'mongodb+srv://dinukgunasekara286:Bzt3SrJYtm5htN4H@fitnessdb.w1xusgy.mongodb.net/'

mongoose.connect(process.env.MONGODB_URI || mongoURL)
    .then(() => {
        console.log('MongoDB Connection Successful');
      })
      .catch((error) => {
        console.error('MongoDB Connection Failed:', error);
      });
  


export default mongoose;

