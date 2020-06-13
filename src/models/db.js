const mongoose = require('mongoose');

async function connectToMongo() { 
  try { 
    await mongoose.connect('mongodb://127.0.0.1/url-shortener', { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connected to db');
  } catch (err) { 
    console.error(err.message);
  }
}

module.exports = connectToMongo;