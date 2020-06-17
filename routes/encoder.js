/* eslint-disable no-console */
const Router = require('koa-router');
const Url = require('../models/url');

const router = new Router();

router.get('/:urlcode', async (ctx) => {
  try {
    const codeInDb = await Url.findOne({
      urlCode: ctx.params.urlcode,
    });
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
