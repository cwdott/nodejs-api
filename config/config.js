const config = {
  app: {
    port: 3000
  },
  db: {
    host: "localhost",
    port: 27017,
    name: "wtfood-dev"
  }
};

config.db.connectionString = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;
module.exports = config;
