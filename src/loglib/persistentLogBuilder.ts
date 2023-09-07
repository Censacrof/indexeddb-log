import { LogBuilder } from "./logBuilder";
import LogWorker from "./logWorker?worker";

const logWorker = new LogWorker();

const persistentLogBuilder = new LogBuilder().middleware(
  (data, level, tags) => {
    logWorker.postMessage({
      date: new Date(),
      level,
      tags,
      data,
    });
  }
);

export const getPersistentLogBuilder = () => persistentLogBuilder.clone();
