Promise.resolve()
  .then(function onFulfilledA() {
    return Promise.reject(new Error("失敗"));
  })
  .then(function onFulfilledB() {
    console.log("onFulfilledBは呼び出されません");
  })
  .catch(function onRejected(error) {
    console.log(error.message); // => "失敗"
  })
  .then(function onFulfilledC() {
    console.log("onFulfilledCは呼び出されます");
  });
