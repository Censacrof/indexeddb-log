export class AsyncQueue<T> {
  private items: T[] = [];
  private popPendingRequests: [
    (value: T | PromiseLike<T>) => void,
    (reason?: unknown) => void
  ][] = [];

  constructor() {}

  push(item: T) {
    const awaiting = this.popPendingRequests.shift();
    if (awaiting) {
      const [resolve] = awaiting;

      resolve(item);
      return;
    }

    this.items.push(item);
  }

  async pop() {
    return new Promise<T>((resolve, reject) => {
      const item = this.items.shift();

      if (item) {
        resolve(item);
        return;
      }

      this.popPendingRequests.push([resolve, reject]);
    });
  }

  clear() {
    this.popPendingRequests.forEach(([_, reject]) => {
      reject("The queue was resetting while you were awaiting for a item");
    });

    this.items.splice(0, this.items.length);
    this.popPendingRequests.splice(0, this.popPendingRequests.length);
  }
}
