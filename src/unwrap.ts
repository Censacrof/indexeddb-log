interface Unwrappable<T> {
  addEventListener: (ev: "success" | "error", listen: () => any) => any;
  result: T;
  error: unknown;
}

export const unwrap = <T>(request: Unwrappable<T>): Promise<T> => {
  return new Promise((resolve, reject) => {
    request.addEventListener("success", () => {
      resolve(request.result);
    });

    request.addEventListener("error", () => {
      reject(request.error);
    });
  });
};
