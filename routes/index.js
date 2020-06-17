const Router = require('koa-router');
const home = require('./home');
const shortener = require('./shortener');
const encoder = require('./encoder');

const router = new Router();

router.use(home, shortener, encoder);

module.exports = router;
