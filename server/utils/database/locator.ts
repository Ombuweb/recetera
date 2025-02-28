import { IRecipeDatabaseService } from '~/core/contracts/services';
import { NuxtHubDBService, RecipeLocalSQLDatabaseService } from './services';
import { IReceteraLoggingService } from '../telemetry/logs/recetera-logging-service.contract';
// import { logger } from '@/server/utils/telemetry/logs/winston-logger';
import { ReceteraLoggingService } from '../telemetry/logs/ReceteraLoggingService';
import { useDrizzle } from './sql/drizzle';
import { J } from 'vitest/dist/chunks/reporters.D7Jzd9GS.js';

let recipeDatabaseService: IRecipeDatabaseService;
let receteraLoggingService: IReceteraLoggingService;

/**
 * Get the Recipe Database Service instance
 * @returns {IRecipeDatabaseService} The Recipe Database Service instance
 */
export const getRecipeDatabaseService = (): IRecipeDatabaseService => {
  if (!recipeDatabaseService) {
    const dbOptions = JSON.parse(process.env.DATABASE_URL as string);
    recipeDatabaseService = new RecipeLocalSQLDatabaseService(dbOptions);
  }
  return recipeDatabaseService;
};

/**
 * Get the Logger instance based on the `LOGGER_TYPE` environment variable. Default is `winston`
 * @returns {IReceteraLoggerModel} The Logger instance
 */
// const getLogger = () => {
//   const logWith = process.env.LOGGER_TYPE || 'winston';
//   return logWith === 'winston' ? logger : console;
// };

/**
 * Get the Recetera Logging Service instance for a specific logger
 * @returns {IReceteraLoggingService} The Recetera Logging Service instance
 */
// export const getReceteraLoggingService = (): IReceteraLoggingService => {
//   if (!receteraLoggingService) {
//     receteraLoggingService = new ReceteraLoggingService(getLogger());
//   }
//   return receteraLoggingService;
// };
