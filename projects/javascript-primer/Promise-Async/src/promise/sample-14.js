Promise.reject(new Error("エラー")).catch(() => {
  console.log("2. コールバック関数が実行されました");
});
console.log("1. 同期的な処理が実行されました");
