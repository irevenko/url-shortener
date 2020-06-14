const Koa = require('koa');
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');
const connectToMongo = require('./models/db');
const controllers = require('./routes');
const path = require('path');

const app = new Koa();
const port = process.env.PORT || 3000;

connectToMongo();

render(app, { 
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: false
});

app.use(bodyParser());
app.use(controllers.routes());
app.use(controllers.allowedMethods());
app.listen(port, () => console.log(`Server is listening at port: ${port}`));