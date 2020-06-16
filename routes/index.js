const Router = require('koa-router');
const shorten = require('./shorten');
const home = require('./home');
const cipher = require('./cipher');

const router = new Router();

router.use(home, shorten, cipher);

module.exports = router;
