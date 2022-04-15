const db = require('./db');
const User = require('./models/User');
const Team = require('./models/Team');

User.belongsToMany(Team, { through: 'CoachTeam' });
Team.belongsToMany(User, { through: 'CoachTeam' });

module.exports = {
  db,
  models: {
    User,
    Team,
  },
};
