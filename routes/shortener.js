/* eslint-disable no-console */
const Router = require('koa-router');
const shortid = require('shortid');
const Url = require('../models/Url');

const router = new Router();
const parentUrl = process.env.PARENT_URL || 'http://localhost:3000';

router.post('/shortener', async (ctx) => {
  const fullUrl = ctx.request.body['full-url'];
  const urlCode = shortid.generate();

  try {
    const urlInDb = await Url.findOne({ fullUrl });
    if (urlInDb) {
      await ctx.render('in-db', {
        urlInDb: urlInDb.shortUrl,
        fullUrl,
      });
    } else {
      const shortUrl = `${parentUrl}/${urlCode}`;
      const newUrl = new Url({
        fullUrl,
        shortUrl,
        urlCode,
      });
      await newUrl.save();
      await ctx.render('not-in-db', {
        notInDb: true,
        newUrl: newUrl.shortUrl,
        fullUrl,
      });
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router.routes();
