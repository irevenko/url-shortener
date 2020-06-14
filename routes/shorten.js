const Router = require('koa-router');
const shortid = require('shortid');
const Url = require('../models/url');

const router = new Router();

router.post('/shorten', async (ctx) => { 
  const fullUrl = ctx.request.body['full-url'];
  const parentUrl = 'http://localhost:3000';
  const urlCipher = shortid.generate();
  
  try { 
    let urlInDb = await Url.findOne({ fullUrl });
    if (urlInDb) { 
      await ctx.render('in-db', { 
        urlInDb: urlInDb.shortUrl
      });
    } else { 
    const shortUrl = `${parentUrl}/${urlCipher}`;
    newUrl = new Url({
      fullUrl,
      shortUrl,
      urlCipher
    });
    await newUrl.save();
    await ctx.render('not-in-db', { 
      newUrl: newUrl.shortUrl
    });
    }
  } catch (err) { 
    console.error(err);
  } 
});

module.exports = router.routes();