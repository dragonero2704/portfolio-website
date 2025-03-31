/**
 *
 * @param callback The function to call when the key is not in the cache
 * @param options cache options
 * @returns a function
 */
function cached(
  callback,
  options
) {
  // init cache
  const cache = {};

  const cacheKey = (name, ...args) => {
    return `${name}-${args.join("&")}`;
  };

  return async (...args) => {
    const key = cacheKey(callback.name, ...args);
    return new Promise((resolve, reject) => {
      if (cache[key]) 
        resolve(cache[key]);
      else {
        callback(...args)
        .catch(reject)
        .then(value=>{
            cache[key]=value;
        setTimeout(
          () => {delete cache[key]},
          options.revalidate * 1000
        );
        resolve(value)
        })
      }
    });
  };
}

const cachedFetch = cached(
  async (route, options)=>{
    return await fetch(route,options)
    .then(reponse=>reponse.json())},
  {revalidate: 1}
)

export {
  cached,
  cachedFetch
}



