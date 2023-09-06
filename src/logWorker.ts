import { AsyncQueue } from "./asyncQueue";
import { logIndexedDb } from "./logIndexedDb";
import { unwrap } from "./unwrap";

const logQueue = new AsyncQueue();

onmessage = async (e) => {
  logQueue.push(e.data);
};

(async () => {
  try {
    while (true) {
      const logData = await logQueue.pop();

      const transaction = logIndexedDb.transaction(["logs"], "readwrite");
      const logStore = transaction.objectStore("logs");

      await unwrap(logStore.add(logData));
    }
  } catch (e) {
    console.error(e);
  }
})();

onerror = (e) => {
  console.error(e);
};
