export const devConfig = {
  // Database configurations
  database: {
    host: "localhost",
    port: 5432,
    name: "workflow_dev",
    user: "dev_user",
    password: "dev_password",
  },

  // API configurations
  api: {
    port: 3000,
    baseUrl: "http://localhost:3000",
  },

  // Logging configurations
  logging: {
    level: "debug",
    format: "json",
  },

  // Worker configurations
  workers: {
    maxConcurrent: 5,
    retryAttempts: 3,
  },

  // Result collector configurations
  resultCollector: {
    batchSize: 100,
    flushIntervalMs: 5000,
  },
};
