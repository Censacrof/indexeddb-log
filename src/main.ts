import { unwrap } from "./unwrap";

export { };

const request = window.indexedDB.open("MyTestDatabase", 2);

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
  logStore.createIndex("level", "level");

  await unwrap(logStore.transaction);
};

const db = await unwrap(request);

const log = async (message: string, level: "debug" | "info" | "error" = "info") => {
  const transaction = db.transaction(["logs"], "readwrite");
  const logStore = transaction.objectStore("logs");

  await unwrap(logStore.add({
    date: new Date(),
    level,
    message
  }))

  console.log(`[${level}] ${message}`)
}


await log("ciao!!");



const getAllLogs = async () => {
  return new Promise((resolve) => {
    const transaction = db.transaction(["logs"], "readwrite");

    const logsStore = transaction.objectStore("logs");
  
    const res: string[] = [];
    logsStore.openCursor().onsuccess = (event) => {
      
      const cursor: IDBCursorWithValue | null=  (event.target as IDBRequest).result;

      if (!cursor) {
        resolve(res)
        return;
      }

      res.push(cursor.value)
      cursor.continue()
    }
  })  
}


console.log(">>>", await getAllLogs());