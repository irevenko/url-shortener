const Router = require('koa-router');
const home = require('./home');
const shortener = require('./shortener');
const decryptor = require('./decryptor');

const router = new Router();

router.use(home, shortener, decryptor);

module.exports = router;
