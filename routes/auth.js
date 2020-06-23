const Router = require('koa-router');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = new Router();

/**
 * @description  Authentification
 * @route POST /register
 */
router.post('/register', async (ctx) => {
  try {
    const login = ctx.request.body['login-form'];
    const password = ctx.request.body['password-form'];
    const userInDb = await User.findOne({ login });

    if (userInDb) {
      ctx.throw(400, 'User with this login already exists!');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      login,
      password: hashedPassword,
    });

    await newUser.save();
    ctx.throw(201, 'User created');
  } catch (err) {
    ctx.throw(500, 'Server error');
  }
});

/**
 * @description  Authentification
 * @route POST /login
 */
router.post('/login', async (ctx) => {
  try {
    const login = ctx.request.body['login-form'];
    const password = ctx.request.body['password-form'];
    const userInDb = await User.findOne({ login });
    if (!userInDb) {
      ctx.throw(400, 'User doesnt exist');
    }

    const isSamePassword = await bcrypt.compare(password, userInDb.password);
    if (!isSamePassword) {
      ctx.throw(400, 'Wrong password!');
    }
    const token = jwt.sign(
      { userId: userInDb.id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
    );
    ctx.body = { token, userId: userInDb.id };
  } catch (err) {
    ctx.throw(500, 'Server error');
  }
});

module.exports = router.routes();
