const router = require('express').Router();
const {
  models: { Team, User },
} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const coachId = 1;
    const teams = await Team.findAll({
      include: {
        model: User,
        where: { id: coachId },
        attributes: ['id', 'firstName', 'lastName'],
      },
    });
    res.send(teams);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
