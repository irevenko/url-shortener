/* eslint-disable no-console */
const mongoose = require('mongoose');

/**
 * This function makes connection with DB and starts the server after succsessful
 * connection with DB (couse we don't want the server to start without DB connection)
 *
 * @param  {object} app - Koa instance
 * @param  {number} port - 3000 is a default one
 */
async function makeConnection(app, port) {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to db!');
    app.listen(port, () => console.log(`Server is listening at port: ${port}`));
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = makeConnection;
