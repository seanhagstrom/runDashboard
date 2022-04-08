const router = require('express').Router();
const {
  models: { User },
} = require('../db');

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    res.send(user);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(409).send('User already exists');
    } else {
      next(error);
    }
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
