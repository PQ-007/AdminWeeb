import dotenv from "dotenv";
import mongoose from "mongoose";
import workers from "./data/workers.js";
import users from "./data/users.js";
import connectDB from "./config/db.js";
import Worker from "./models/workerModel.js";
import User from "./models/userModel.js";


dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Clear existing data
    await Worker.deleteMany();
    await User.deleteMany();

    // Insert users
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    // Associate admin user with products
    const sampleWorkers = workers.map((worker) => {
      return { ...worker, registeredBy: adminUser };
    });

    await Worker.insertMany(sampleWorkers);
    console.log("Data Imported Successfully");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};


const destroyData = async () => {
  try {
    await Worker.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed Successfully");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}