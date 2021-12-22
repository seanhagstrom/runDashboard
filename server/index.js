const { db } = require("./db");
const app = require("./app");
const seed = require("../script/seed");
const Port = process.env.PORT || 8080;

const init = async () => {
  try {
    if (process.env.SEED === "true") {
      await seed();
    } else {
      await db.sync();
    }

    app.listen(Port, () => {
      console.log(`runDashboard server is running on port ${Port}!`);
    });
  } catch (error) {
    console.error(error);
  }
};

init();
