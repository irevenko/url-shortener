/* eslint-disable no-console */
const Router = require('koa-router');
const Url = require('../models/Url');

const router = new Router();

/**
 * @description Redirects user to their initial link
 * @route GET /:urlcode
 * @param {string} - shortid token
 */
router.get('/:urlcode', async (ctx) => {
  try {
    const codeInDb = await Url.findOne({ urlCode: ctx.params.urlcode });
    if (codeInDb) {
      ctx.redirect(codeInDb.fullUrl);
    } else {
      ctx.body = '<h1>Invalid url!</h1>';
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router.routes();
