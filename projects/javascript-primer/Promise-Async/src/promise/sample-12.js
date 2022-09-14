const promise = new Promise((resolve) => {
  console.log("1. resolveします");
  resolve();
});
promise.then(() => {
  console.log("3. コールバック関数が実行されました");
});
console.log("2. 同期的な処理が実行されました");
