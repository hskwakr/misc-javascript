Promise.resolve(1)
  .then((value) => {
    console.log(value); // => 1
    return value * 2;
  })
  .then((value) => {
    console.log(value); // => 2
    return value * 2;
  })
  .then((value) => {
    console.log(value); // => 4
    // 値を返さない場合は undefined を返すのと同じ
  })
  .then((value) => {
    console.log(value); // => undefined
  });
