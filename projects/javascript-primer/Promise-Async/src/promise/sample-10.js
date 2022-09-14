// const fulfilledPromise = Promise.resolve(); と同じ意味
// const fulfilledPromise = new Promise((resolve) => {
//   resolve();
// });

// `resolve(42)`された`Promise`インスタンスを作成する
const fulfilledPromise = Promise.resolve(42);
fulfilledPromise.then((value) => {
  console.log(value); // => 42
});
