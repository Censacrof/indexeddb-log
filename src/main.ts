import { unwrap } from "./unwrap";

export { };

const request = window.indexedDB.open("MyTestDatabase", 1);

request.onupgradeneeded = async (event) => {
  console.log("upgrade needed");
  const db = (event.target as IDBOpenDBRequest).result;
  console.log({event})

  // const tokensStore = db.createObjectStore("tokens", {
  //   keyPath: "token",
  // });
  // await unwrap(tokensStore.transaction);

  const logStore = db.createObjectStore("logs", {
    keyPath: "id",
    autoIncrement: true
  });
  
  logStore.createIndex("date", "date");

  await unwrap(logStore.transaction);
};

const db = await unwrap(request);

const log = async (message: string) => {
  const transaction = db.transaction(["logs"], "readwrite");
  const logStore = transaction.objectStore("logs");

  await unwrap(logStore.add({
    date: new Date(),
    message
  }))

  console.log(message)
}


await log("ciao!!");

