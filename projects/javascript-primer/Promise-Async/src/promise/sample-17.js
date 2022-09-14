// ランダムでFulfilledまたはRejectedの`Promise`インスタンスを返す関数
function asyncTask() {
  return Math.random() > 0.5
    ? Promise.resolve("成功")
    : Promise.reject(new Error("失敗"));
}

// asyncTask関数は新しい`Promise`インスタンスを返す
asyncTask()
  // thenメソッドは新しい`Promise`インスタンスを返す
  .then(function onFulfilled(value) {
    console.log(value); // => "成功"
  })
  // catchメソッドは新しい`Promise`インスタンスを返す
  .catch(function onRejected(error) {
    console.log(error.message); // => "失敗"
  });
