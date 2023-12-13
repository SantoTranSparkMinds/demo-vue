export const handleRequest = (promise: Promise<any>) =>
  promise.then((res) => res).catch((err) => err as any);
