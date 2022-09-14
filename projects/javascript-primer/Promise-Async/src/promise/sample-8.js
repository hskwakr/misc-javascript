const promise = new Promise((resolve, reject) => {
  // 非同期でresolveする
  setTimeout(() => {
    resolve();
    // すでにresolveされているため無視される
    reject(new Error("エラー"));
  }, 16);
});

promise.then(
  () => {
    console.log("Fulfilledとなった");
  },
  (error) => {
    // この行は呼び出されない
  }
);
