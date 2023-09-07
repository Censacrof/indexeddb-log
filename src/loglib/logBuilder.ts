import { Log } from "./log";

type MiddlewareFn = (data: unknown[], level: keyof Log, tags: string[]) => void;

export class LogBuilder {
  private baseLogInstance: Log = console;
  private tags: string[] = [];
  private middlewares: MiddlewareFn[] = [];

  private runMiddlewares(data: unknown[], level: keyof Log) {
    this.middlewares.forEach((middleware) => {
      middleware(data, level, this.tags);
    });
  }

  baseLog(log: Log) {
    this.baseLogInstance = log;
    return this;
  }

  tag(tag: string) {
    this.tags = [...this.tags, tag];
    return this;
  }

  middleware(middleware: MiddlewareFn) {
    this.middlewares = [...this.middlewares, middleware];
    return this;
  }

  build(): Log {
    return {
      trace: (...data) => {
        this.runMiddlewares(data, "trace");
        this.baseLogInstance.trace(...data);
      },
      info: (...data) => {
        this.runMiddlewares(data, "info");
        this.baseLogInstance.info(...data);
      },
      warn: (...data) => {
        this.runMiddlewares(data, "warn");
        this.baseLogInstance.warn(...data);
      },
      error: (...data) => {
        this.runMiddlewares(data, "error");
        this.baseLogInstance.error(...data);
      },
    };
  }

  clone() {
    const cloned = new LogBuilder();

    cloned.tags = [...this.tags];
    cloned.middlewares = [...this.middlewares];

    return cloned;
  }
}
