/* eslint-disable no-console */
const mongoose = require('mongoose');

async function connectToMongo() {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to db!');
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = connectToMongo;
