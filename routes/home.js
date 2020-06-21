const Router = require('koa-router');

const router = new Router();

/**
 * @description  Main page
 * @route GET /
 */
router.get('/', async (ctx) => {
  await ctx.render('home');
});

module.exports = router.routes();
