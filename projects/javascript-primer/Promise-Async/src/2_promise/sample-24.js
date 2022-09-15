function main() {
  return Promise.reject(new Error("エラー"));
}

// mainはRejectedなPromiseを返す
main()
  .catch((error) => {
    // mainで発生したエラーのログを出力する
    console.log(error);
    // Promiseチェーンはそのままエラーを継続させる
    return Promise.reject(error);
  })
  .then(() => {
    // 前のcatchでRejectedなPromiseが返されたため、この行は実行されません
  })
  .catch((error) => {
    console.log("メインの処理が失敗した");
  });
