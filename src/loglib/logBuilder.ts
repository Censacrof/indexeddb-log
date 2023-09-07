import { Log } from "./log";

type MiddlewareFn = (data: unknown[], level: keyof Log, tags: string[]) => void;

export class LogBuilder {
  private tags: string[] = [];

  private middlewares: MiddlewareFn[] = [];
  private runMiddlewares(data: unknown[], level: keyof Log) {
    this.middlewares.forEach((middleware) => {
      middleware(data, level, this.tags);
    });
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
        console.trace(...data);
      },
      info: (...data) => {
        this.runMiddlewares(data, "info");
        console.info(...data);
      },
      warn: (...data) => {
        this.runMiddlewares(data, "warn");
        console.warn(...data);
      },
      error: (...data) => {
        this.runMiddlewares(data, "error");
        console.error(...data);
      },
    };
  }

  clone() {
    return {
      ...this,
    };
  }
}
