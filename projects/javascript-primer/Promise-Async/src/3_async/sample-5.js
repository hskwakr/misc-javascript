// async functionは必ずPromiseを返す
async function doAsync() {
  // 非同期処理
}
async function asyncMain() {
  // doAsyncの非同期処理が完了するまでまつ
  await doAsync();
  // 次の行はdoAsyncの非同期処理が完了されるまで実行されない
  console.log("この行は非同期処理が完了後に実行される");
}
