const Router = require('koa-router');
const Url = require('../models/url');

const router = new Router();

router.get('/:cipher', async (ctx) => { 
  try { 
    const url = await Url.findOne({ urlCipher: ctx.params.cipher });
    if (url) { 
      ctx.redirect(url.fullUrl);
    }
    return ctx.body = 'Wrong url!';
  } catch (err) { 
    console.error(err)
  }
});

module.exports = router.routes()