import { unwrap } from "./unwrap";

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

export const logIndexedDb = await unwrap(request);
