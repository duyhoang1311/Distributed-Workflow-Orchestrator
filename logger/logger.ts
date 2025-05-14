import { currentConfig } from "../configs";

export class Logger {
  private config = currentConfig.logging;

  log(message: string, level?: string) {
    const logLevel = level || this.config.level;
    const timestamp = new Date().toISOString();

    const logEntry = {
      timestamp,
      level: logLevel,
      message,
      environment: process.env.ENCORE_ENV,
    };

    if (this.config.format === "json") {
      console.log(JSON.stringify(logEntry));
    } else {
      console.log(`[${timestamp}] ${logLevel.toUpperCase()}: ${message}`);
    }
  }

  debug(message: string) {
    this.log(message, "debug");
  }

  info(message: string) {
    this.log(message, "info");
  }

  error(message: string) {
    this.log(message, "error");
  }
}

export const logger = new Logger();
