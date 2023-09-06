module.exports = ({ env }) => ({
  connction: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "dpg-cjsa8sdv2qks739n02k0-a.frankfurt-postgres.render.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapidb_d43w"),
      user: env("DATABASE_NAME", "admin"),
      password: env("DATABASE_PASSWORD", "KjqCA6lPnZCmeOyeUAm1H7ZDsQ4TGCfz"),
      ssl: env.bool("DATABASE_SSL", true),
    },
  },
});
