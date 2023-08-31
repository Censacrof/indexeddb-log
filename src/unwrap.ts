type AddEventListener = (ev: "success" | "error", listen: () => any) => any;

type Unwrappable<T> = {
  addEventListener: AddEventListener;
  result?: T;
  error?: unknown;
};

export function unwrap(request: Unwrappable<undefined>): Promise<undefined>;
export function unwrap<T>(request: Unwrappable<T>): Promise<T>;
export function unwrap(request: Unwrappable<unknown>): Promise<unknown> {
  return new Promise((resolve, reject) => {
    request.addEventListener("success", () => {
      resolve(request.result);
    });

    request.addEventListener("error", () => {
      reject(request.error);
    });
  });
}
