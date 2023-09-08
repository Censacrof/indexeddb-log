import { Log } from "./log";

type TransportFn = (data: unknown[], level: keyof Log, tags: string[]) => void;

export class LogBuilder {
  private baseLogInstance: Log = console;
  private tags: string[] = [];
  private transports: TransportFn[] = [];

  private logUsingTransports(data: unknown[], level: keyof Log) {
    this.transports.forEach((middleware) => {
      middleware(data, level, this.tags);
    });
  }

  baseLog(log: Log) {
    this.baseLogInstance = log;
    return this;
  }

  withTags(tag: string) {
    this.tags = [...this.tags, tag];
    return this;
  }

  withTimestamp(){
    //
    return this;
  }

  withPerformance(){
    //
    return this
  }

  addTransport(transport: TransportFn) {
    this.transports = [...this.transports, transport];
    return this;
  }

  build(): Log {
    return {
      debug: (...data) => { // this is not what we mean: https://developer.mozilla.org/en-US/docs/Web/API/console/trace
        this.logUsingTransports(data, "debug");
        this.baseLogInstance.debug(...data);
      },
      info: (...data) => {
        this.logUsingTransports(data, "info");
        this.baseLogInstance.info(...data);
      },
      warn: (...data) => {
        this.logUsingTransports(data, "warn");
        this.baseLogInstance.warn(...data);
      },
      error: (...data) => {
        this.logUsingTransports(data, "error");
        this.baseLogInstance.error(...data);
      },
    };
  }

  clone() {
    const cloned = new LogBuilder();

    cloned.baseLogInstance = this.baseLogInstance;
    cloned.tags = [...this.tags];
    cloned.transports = [...this.transports];

    return cloned;
  }
}
