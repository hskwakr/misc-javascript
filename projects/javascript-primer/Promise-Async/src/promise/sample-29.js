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

const fetchedPromise = Promise.all([
  dummyFetch("/resource/A"),
  dummyFetch("/resource/B"),
]);
// fetchedPromiseの結果をDestructuringでresponseA, responseBに代入している
fetchedPromise.then(([responseA, responseB]) => {
  console.log(responseA.body); // => "Response body of /resource/A"
  console.log(responseB.body); // => "Response body of /resource/B"
});
