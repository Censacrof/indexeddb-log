import { AsyncQueue } from "./asyncQueue";
import { getLogIndexedDb } from "./logIndexedDb";
import { unwrap } from "./unwrap";

const logQueue = new AsyncQueue();

onmessage = (e) => {
  logQueue.push(e.data);
};

new Promise(() => {
  getLogIndexedDb().then((logIndexedDb) => {
    while (true) {
      logQueue.pop().then((logData) => {
        const transaction = logIndexedDb.transaction(["logs"], "readwrite");
        const logStore = transaction.objectStore("logs");

        unwrap(logStore.add(logData)).catch((e) => {
          console.error("[logWorker] coldn't add log to indexeddb", e);
        });
      });
    }
  });
});

onerror = (e) => {
  console.error(e);
};
