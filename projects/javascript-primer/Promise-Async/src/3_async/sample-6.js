async function asyncMain() {
  const value = await Promise.resolve(42);
  console.log(value); // => 42
}
asyncMain(); // Promiseインスタンスを返す

// function asyncMain() {
//   return Promise.resolve(42).then(value => {
//       console.log(value); // => 42
//   });
// }
// asyncMain(); // Promiseインスタンスを返す
