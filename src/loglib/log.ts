type LogFn = (...data: unknown[]) => void;

export interface Log {
  trace: LogFn;
  info: LogFn;
  warn: LogFn;
  error: LogFn;
}
