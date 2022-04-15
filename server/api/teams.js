const router = require('express').Router();
const {
  models: { Team, User },
} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const teams = await Team.findAll({ include: User });
    res.send(teams);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
