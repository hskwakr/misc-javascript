try {
  throw new Error("同期的なエラー");
} catch (error) {
  console.log("同期的なエラーをキャッチできる");
}
console.log("この行は実行されます");
