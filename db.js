require("dotenv").config();
const db = require("mongoose");

const URL_CONNECT = process.env.URL_CONNECT;

db.Promise = global.Promise;

async function connectDB() {
  try {
    await db.connect(URL_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`[db.connect] Try to connect: => ${URL_CONNECT}`);
    console.log("[db.connect] Connection Successful");
  } catch (error) {
    console.log(`[db.connect] Try to connect: => ${URL_CONNECT}`);
    console.error(`[db.connect] Connection Rejected: => ${error.message}`);
  }
}

module.exports = connectDB;
