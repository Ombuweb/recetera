import { logger } from '../utils/telemetry/logs';

export default defineEventHandler(async (event) => {
  logger.info('Hello from Grafana, recetera here');
  return {
    body: 'Hello from Grafana',
  };
});
