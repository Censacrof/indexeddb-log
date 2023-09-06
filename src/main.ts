import { AsyncQueue } from "./asyncQueue";
import { logIndexedDb } from "./logIndexedDb";
import LogWorker from "./logWorker?worker";
import { unwrap } from "./unwrap";

const LONG_STRING =
  "ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ciao!! ";

(async () => {
  const startWriteBenchmarkButton: HTMLButtonElement | null =
    document.querySelector("button#startWriteBenchmark");
  const startWriteBenchmarkWithWorkerButton: HTMLButtonElement | null =
    document.querySelector("button#startWriteWithWebWorker");

  startWriteBenchmarkButton?.addEventListener("click", async () => {
    startWriteBenchmarkButton?.setAttribute("disabled", "true");

    const log = async (
      message: string,
      level: "debug" | "info" | "error" = "info"
    ) => {
      const transaction = logIndexedDb.transaction(["logs"], "readwrite");
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

    await benchmark(log);
  });

  startWriteBenchmarkWithWorkerButton?.addEventListener("click", async () => {
    const logWorker = new LogWorker();
    const logQueue = new AsyncQueue();

    const log = (
      message: string,
      level: "debug" | "info" | "error" = "info"
    ) => {
      logQueue.push({
        date: new Date(),
        level,
        message,
      });

      return new Promise<void>((resolve) => {
        resolve();
      });
    };

    (async () => {
      while (true) {
        logWorker.postMessage(await logQueue.pop());
        await new Promise<void>((resolve) => {
          resolve();
        });
      }
    })();

    await benchmark(log);
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

async function benchmark(
  log: (message: string, level?: "debug" | "info" | "error") => Promise<void>
) {
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
}
