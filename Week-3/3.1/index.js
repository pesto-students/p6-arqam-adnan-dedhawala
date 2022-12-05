// Exercise 3.1
// Create a memoize function that remembers previous inputs and stores them in cache

const add = (a, b) => {
  return a + b;
};

const memoize = fn => {
  let cache = new Map();
  return (...args) => {
    let key = args.toString();
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  };
};

const memoizedAdd = memoize(add);
