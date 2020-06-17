/* eslint-disable no-console */
const Koa = require('koa');
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');
const path = require('path');
const connectToMongo = require('./models/db');
const routes = require('./routes');
require('dotenv').config();

const app = new Koa();
const port = process.env.PORT || 3000;

connectToMongo();

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: false,
});

app.use(bodyParser());
app.use(routes.routes());
app.use(routes.allowedMethods({ throw: true }));
app.listen(port, () => console.log(`Server is listening at port: ${port}`));
