import { unwrap } from "./unwrap";

let logIndexedDb: IDBDatabase | null = null;

export const getLogIndexedDb = async () => {
  if (!logIndexedDb) {
    await initLogIndexedDb();
  }

  return logIndexedDb!;
};

const initLogIndexedDb = async () => {
  const request = indexedDB.open("MyTestDatabase", 2);

  request.onupgradeneeded = async (event) => {
    console.log("upgrade needed");
    const db = (event.target as IDBOpenDBRequest).result;
    // console.log({event});

    // const tokensStore = db.createObjectStore("tokens", {
    //   keyPath: "token",
    // });
    // await unwrap(tokensStore.transaction);

    const logStore = db.createObjectStore("logs", {
      keyPath: "id",
      autoIncrement: true,
    });

    logStore.createIndex("date", "date");
    logStore.createIndex("level", "level");

    await unwrap(logStore.transaction);
  };

  const db = await unwrap(request);
  logIndexedDb = db;
};
