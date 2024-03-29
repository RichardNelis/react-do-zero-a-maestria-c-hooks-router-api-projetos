const mongoose = require("mongoose");

// Connection
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@reactgram.dbslyxg.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("Conectou no banco");

    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;
