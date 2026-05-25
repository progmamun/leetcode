type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
  const cache = new Map();
  const resultKey = Symbol('memoResult');

  return function (...args: any[]) {
    let currentLevel = cache;
    for (const arg of args) {
      if (!currentLevel.has(arg)) {
        currentLevel.set(arg, new Map());
      }
      currentLevel = currentLevel.get(arg);
    }

    if (!currentLevel.has(resultKey)) {
      currentLevel.set(resultKey, fn(...args));
    }

    return currentLevel.get(resultKey);
  };
}
