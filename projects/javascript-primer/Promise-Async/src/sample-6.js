// 非同期処理の外
setTimeout(() => {
  // 非同期処理の中
  try {
    throw new Error("エラー");
  } catch (error) {
    console.log("エラーをキャッチできる");
  }
}, 10);
console.log("この行は実行されます");
