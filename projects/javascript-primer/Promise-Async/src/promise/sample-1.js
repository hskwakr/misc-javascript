// asyncPromiseTask関数は、Promiseインスタンスを返す
function asyncPromiseTask() {
  return new Promise((resolve, reject) => {
    // さまざまな非同期処理を行う
    // 非同期処理に成功した場合は、resolveを呼ぶ
    // 非同期処理に失敗した場合は、rejectを呼ぶ
  });
}
// asyncPromiseTask関数の非同期処理が成功した時、失敗した時に呼ばれる処理をコールバック関数として登録する
asyncPromiseTask()
  .then(() => {
    // 非同期処理が成功したときの処理
  })
  .catch(() => {
    // 非同期処理が失敗したときの処理
  });
