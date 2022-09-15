// `promise`にはResolvedまたはRejectedなPromiseインスタンスがランダムで入る
const promise = Math.random() < 0.5 ? Promise.resolve() : Promise.reject();
promise
  .then(() => {
    console.log("Promiseのthenメソッド");
  })
  .catch((error) => {
    console.log("Promiseのcatchメソッド");
  })
  .finally(() => {
    // 成功、失敗どちらの場合でも呼び出される
    console.log("Promiseのfinallyメソッド");
  });
