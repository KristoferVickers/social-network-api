const { connect, connection } = require("mongoose");

const dbConnectionUri =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialNetworkDB";

connect(dbConnectionUri);

module.exports = connection;