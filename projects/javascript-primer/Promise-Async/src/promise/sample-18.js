// RejectedなPromiseは次の失敗時の処理までスキップする
const rejectedPromise = Promise.reject(new Error("失敗"));

rejectedPromise
  .then(() => {
    // このthenのコールバック関数は呼び出されません
  })
  .then(() => {
    // このthenのコールバック関数は呼び出されません
  })
  .catch((error) => {
    console.log(error.message); // => "失敗"
  });
