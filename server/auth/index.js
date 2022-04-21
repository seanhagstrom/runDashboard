const router = require('express').Router();
const {
  models: { User },
} = require('../db');

router.get('/me', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    if (user) {
      const { id, email } = user;
      res.send({ id, email });
    }
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || !(await user.checkPassword(password))) {
      const error = Error('Incorrect email/password!');
      error.status = 401;
      throw error;
    }
    res.send({ token: await user.generateToken() });
  } catch (error) {
    next(error);
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    res.send({ token: await user.generateToken() });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(409).send('User already exists');
    } else {
      next(error);
    }
  }
});

module.exports = router;
