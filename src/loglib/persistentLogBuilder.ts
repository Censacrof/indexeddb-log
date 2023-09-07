import LogWorker from "../logWorker?worker";
import { LogBuilder } from "./logBuilder";

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
