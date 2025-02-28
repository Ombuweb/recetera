export interface IReceteraLoggerModel {
  error(message: string, error: Error): void;
  info(message: string): void;
  debug(message: string): void;
  warn(message: string): void;
}
