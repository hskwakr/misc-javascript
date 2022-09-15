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

// リソースを取得中かどうかのフラグ
let isLoading = true;
dummyFetch("/resource/A")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    isLoading = false;
    console.log("Promiseのfinallyメソッド");
  });
