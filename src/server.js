const Koa = require('koa');
const Router = require('koa-router');
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');
const path = require('path');
const mongoose = require('mongoose');
const connectToMongo = require('./models/db');


const app = new Koa();
const router = new Router();
const port = process.env.PORT || 3000;

connectToMongo();

render(app, { 
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: false
});

router.get('/', async (ctx) => { 
  await ctx.render('index');
});

router.post('/shortener', async (ctx) => { 
  console.log(ctx.request.body['full-url']);
  ctx.redirect('/');
});


app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port, () => console.log(`Server is listening at port: ${port}`));