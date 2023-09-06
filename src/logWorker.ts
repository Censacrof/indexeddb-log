import { logIndexedDb } from "./logIndexedDb";
import { unwrap } from "./unwrap";

onmessage = async (e) => {
  const transaction = logIndexedDb.transaction(["logs"], "readwrite");
  const logStore = transaction.objectStore("logs");

  await unwrap(logStore.add(e.data));
};
