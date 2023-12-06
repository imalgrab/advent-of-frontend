type MemoizedFunction<T, R> = (x: T) => R | undefined;

export function memoize<T, R>(fn: (args: T) => R): MemoizedFunction<T, R> {
  if (typeof fn !== 'function') {
    throw new Error('Function to be memoized must be a function.');
  }
  const cache = new Map<T, R>();

  return x => {
    if (!cache.has(x)) {
      cache.set(x, fn(x));
    }

    return cache.get(x);
  };
}
