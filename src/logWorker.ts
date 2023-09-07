import { AsyncQueue } from "./asyncQueue";
import { getLogIndexedDb } from "./logIndexedDb";
import { unwrap } from "./unwrap";

const echoError = (e: unknown) => console.error("[logWorker]", e);

const logQueue = new AsyncQueue();

onmessage = (e) => {
  logQueue.push(e.data);
};

onerror = echoError;

(async () => {
  const logIndexedDb = await getLogIndexedDb();

  while (true) {
    const logData = await logQueue.pop();
    const transaction = logIndexedDb.transaction(["logs"], "readwrite");
    const logStore = transaction.objectStore("logs");

    await unwrap(logStore.add(logData)).catch(echoError);
  }
})();
