export function makeService<T extends object>(service: T, domain: string): T {
  return new Proxy(service, {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);
      if (typeof value !== 'function') return value;
      return async (...args: unknown[]) => {
        try {
          return await value.apply(target, args);
        } catch (err) {
          console.error(`[${domain}] ${String(prop)} failed`, err);
          throw err;
        }
      };
    },
  });
}
