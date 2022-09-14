function delay(timeoutMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeoutMs);
  });
}

// `then`メソッドで成功時のコールバック関数だけを登録
delay(10).then(() => {
  console.log("10ミリ秒後に呼ばれる");
});
