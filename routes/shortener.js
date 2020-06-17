/* eslint-disable no-console */
const Router = require('koa-router');
const shortid = require('shortid');
const Url = require('../models/url');

const router = new Router();

router.post('/shortener', async (ctx) => {
  const fullUrl = ctx.request.body['full-url'];
  const parentUrl = process.env.PARENT_URL;
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
        newUrl: newUrl.shortUrl,
        fullUrl,
      });
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router.routes();