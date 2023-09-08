type LogFn = (...data: unknown[]) => void;

export interface Log {
  debug: LogFn;
  info: LogFn;
  warn: LogFn;
  error: LogFn;
}
