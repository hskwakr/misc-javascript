/* ================================= */
/* single process                    */
/* single thread                     */
/* call back                         */
/* ================================= */

// function stack(): never {
//   stack();
// }
// stack();
// // RangeError: Maximum call stack size exceeded

// ajax("https://...");
// wait(3000);
// if (!ajaxDone()) {
//   cancelAjax();
// }

// console.log("first");
// setTimeout(() => {
//   console.log("second");
// }, 1000);
// console.log("third");
// // first
// // third
// // second

// console.log("first");
// setTimeout(() => {
//   console.log("second");
// }, 0);
// console.log("third");
// // first
// // third
// // second

// function ajax(uri: string, callback: (res: Response) => void): void {
//   // ...
// }

// ajax("https://...", (res: Response) => {
//   // ...
// });

// ajax("https://...", (res1: Response) => {
//   ajax("https://...", (res2: Response) => {
//     // ...
//   });
// });

// ajax("https://...", (res1: Response) => {
//   ajax("https://...", (res2: Response) => {
//     ajax("https://...", (res3: Response) => {
//       ajax("https://...", (res4: Response) => {
//         ajax("https://...", (res5: Response) => {
//           ajax("https://...", (res6: Response) => {
//             // ...
//           });
//         });
//       });
//     });
//   });
// });
