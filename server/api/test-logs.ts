// import { getReceteraLoggingService } from '../utils/database/locator';
let counter = 0;
export default defineEventHandler(async (event) => {
  // getReceteraLoggingService().logInfo('Hello from Grafana, recetera here');
  // return {
  //   body: 'Hello from Grafana',
  // };
  console.log('Hello from Grafana, recetera here', counter++);
});
