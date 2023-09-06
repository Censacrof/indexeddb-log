import { unwrap } from "./unwrap";

const LONG_STRING =
  "ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ";

(async () => {
  const request = window.indexedDB.open("MyTestDatabase", 2);

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

  const log = async (
    message: string,
    level: "debug" | "info" | "error" = "info"
  ) => {
    const transaction = db.transaction(["logs"], "readwrite");
    const logStore = transaction.objectStore("logs");

    await unwrap(
      logStore.add({
        date: new Date(),
        level,
        message,
      })
    );

    // console.log(`[${level}] ${message}`);
  };

  const startWriteBenchmarkButton: HTMLButtonElement | null =
    document.querySelector("button#startWriteBenchmark");

  startWriteBenchmarkButton?.addEventListener("click", async () => {
    startWriteBenchmarkButton?.setAttribute("disabled", "true");

    document.querySelector(
      "#logSize"
    )!.textContent = `LOG entry size: ${LONG_STRING.length}B`;

    const totalWrites = 10000;
    const partialAvgSampleSize = 100;

    const startTime = new Date().getTime();
    let lastWriteTime = startTime;

    for (let i = 0; i < totalWrites; i++) {
      await log(LONG_STRING);

      document.querySelector("#numberOfEntries")!.textContent = `No. writes: ${
        i + 1
      }/${totalWrites}`;
      document.querySelector("#timeEllapsed")!.textContent = `Ellapsed: ${(
        (new Date().getTime() - startTime) /
        1000
      ).toFixed(2)}s`;
      if (i % partialAvgSampleSize === 0) {
        const now = new Date().getTime();
        const avg = partialAvgSampleSize / ((now - lastWriteTime) / 1000);
        document.querySelector(
          "#last100avg"
        )!.textContent = `AVG w/s (last ${partialAvgSampleSize} writes): ${avg.toFixed(
          2
        )}`;
        lastWriteTime = now;
      }
    }

    const totalTimeEllapsed = new Date().getTime() - startTime;
    const totalAvg = totalWrites / (totalTimeEllapsed / 1000);
    document.querySelector("#avg")!.textContent = `AVG w/s: ${totalAvg.toFixed(
      2
    )}`;
  });

  // // const getAllLogs = () => {
  // //   return new Promise((resolve) => {
  // //     const transaction = db.transaction(["logs"], "readwrite");

  // //     const logsStore = transaction.objectStore("logs");

  // //     const res: string[] = [];
  // //     logsStore.openCursor().onsuccess = (event) => {

  // //       const cursor: IDBCursorWithValue | null=  (event.target as IDBRequest).result;

  // //       if (!cursor) {
  // //         resolve(res)
  // //         return;
  // //       }

  // //       res.push(cursor.value)
  // //       cursor.continue()
  // //     }
  // //   })
  // // }

  // // console.log(">>>", await getAllLogs());
})();
