export const stagingConfig = {
  // Database configurations - Using Encore Cloud PostgreSQL
  database: {
    // These will be automatically provided by Encore Cloud
    // and accessed through environment variables
    host: process.env.ENCORE_DB_HOST || "staging-db.example.com",
    port: parseInt(process.env.ENCORE_DB_PORT || "5432"),
    name: process.env.ENCORE_DB_NAME || "workflow_staging",
    user: process.env.ENCORE_DB_USER || "staging_user",
    password: process.env.ENCORE_DB_PASSWORD || "staging_password",
  },

  // API configurations
  api: {
    port: parseInt(process.env.PORT || "8080"),
    baseUrl:
      process.env.ENCORE_APP_BASE_URL || "https://staging-api.example.com",
  },

  // Logging configurations - Using Encore Cloud logging
  logging: {
    level: "info",
    format: "json",
  },

  // Worker configurations
  workers: {
    maxConcurrent: parseInt(process.env.WORKER_CONCURRENT || "10"),
    retryAttempts: parseInt(process.env.WORKER_RETRY_ATTEMPTS || "5"),
  },

  // Result collector configurations
  resultCollector: {
    batchSize: parseInt(process.env.RESULT_BATCH_SIZE || "500"),
    flushIntervalMs: parseInt(process.env.RESULT_FLUSH_INTERVAL || "10000"),
  },
};
