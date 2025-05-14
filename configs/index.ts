import { devConfig } from "./dev.config";
import { stagingConfig } from "./staging.config";

// Define available environments
export type Environment = "dev" | "staging";

// Configuration type definition
export interface Config {
  database: {
    host: string;
    port: number;
    name: string;
    user: string;
    password: string;
  };
  api: {
    port: number;
    baseUrl: string;
  };
  logging: {
    level: string;
    format: string;
  };
  workers: {
    maxConcurrent: number;
    retryAttempts: number;
  };
  resultCollector: {
    batchSize: number;
    flushIntervalMs: number;
  };
}

// Get configuration based on environment
export function getConfig(env: Environment): Config {
  switch (env) {
    case "dev":
      return devConfig;
    case "staging":
      return stagingConfig;
    default:
      throw new Error(`Unknown environment: ${env}`);
  }
}

// Get current environment from Encore
export function getCurrentEnvironment(): Environment {
  // You can customize this logic based on your needs
  const env = process.env.ENCORE_ENV || "dev";
  return env as Environment;
}

// Export current configuration
export const currentConfig = getConfig(getCurrentEnvironment());
