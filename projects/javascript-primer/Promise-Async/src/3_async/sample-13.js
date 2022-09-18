async function asyncMain() {
  // 中でawaitしても、Async Functionの外側の処理まで止まるわけではない
  await new Promise((resolve) => {
    setTimeout(resolve, 16);
  });
}

console.log("1. asyncMain関数を呼び出します");
// Async Functionは外から見れば単なるPromiseを返す関数
asyncMain().then(() => {
  console.log("3. asyncMain関数が完了しました");
});
// Async Functionの外側の処理はそのまま進む
console.log("2. asyncMain関数外では、次の行が同期的に呼び出される");
