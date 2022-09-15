function dummyFetch(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path.startsWith("/resource")) {
        resolve({ body: `Response body of ${path}` });
      } else {
        reject(new Error("NOT FOUND"));
      }
    }, 1000 * Math.random());
  });
}

const results = [];
// Resource Aを取得する
dummyFetch("/resource/A")
  .then((response) => {
    results.push(response.body);
    // Resource Bを取得する
    return dummyFetch("/resource/B");
  })
  .then((response) => {
    results.push(response.body);
  })
  .then(() => {
    console.log(results); // => ["Response body of /resource/A", "Response body of /resource/B"]
  });
