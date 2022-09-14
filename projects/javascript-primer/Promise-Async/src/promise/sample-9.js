const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
    resolve(); // 二度目以降のresolveやrejectは無視される
  }, 16);
});

promise.then(
  () => {
    console.log("最初のresolve時に一度だけ呼ばれる");
  },
  (error) => {
    // この行は呼び出されない
  }
);
