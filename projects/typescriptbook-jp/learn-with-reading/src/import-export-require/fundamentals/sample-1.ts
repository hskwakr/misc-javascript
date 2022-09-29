/* ================================= */
/* import export require             */
/* ================================= */

// export const foo = "foo";

// export const publicValue = 1;
// const privateValue = 2;

// foo = 1; // 未定義の変数fooへの代入
// export const bar = foo; // error

/* ================================= */
/* CommonJS                          */
/* ================================= */

// const myPackage = require("./MyPackage");

// // increment.js
// module.exports = (i) => i + 1;

// // index.js
// const increment = require("./increment");
// console.log(increment(3));

// // dayOfWeek.js
// module.exports = "Monday";
// module.exports = "Tuesday";
// module.exports = "Wednesday";
// module.exports = "Thursday";
// module.exports = "Friday";
// module.exports = "Saturday";
// module.exports = "Sunday";

// // index.js
// const day = require("./dayOfWeek");
// console.log(day); // 'Sunday'

// // util.js
// exports.increment = (i) => i + 1;
// // index.js
// const util = require("./util");
// console.log(util.increment(3));
// // index.js
// const { increment } = require("./util");
// console.log(increment(3));
// const { increment } = require("./other");
// const { increment: inc } = require("./util");
// console.log(inc(3));

/* ================================= */
/* ES Module                         */
/* ================================= */

// import * as package1 from "package1";
// import package2 from "package2";

// // increment.js
// export default (i) => i + 1;
// // index.js
// import increment from "./increment";
// console.log(increment(3));
// import * as increment from "./increment";
// console.log(increment.default(3));

// // util.js
// export const increment = (i) => i + 1;
// const increment = (i) => i + 1;
// export { increment };

// // index.js
// import { increment } from "./util";
// console.log(increment(3));
// import { increment } from "./util";
// console.log(increment(3));

// // index.js
// import("./util").then(({ increment }) => {
//   console.log(increment(3));
//   // @log: 4
// });

/* ================================= */
/* ES Module                         */
/* with Node.js                      */
/* ================================= */

// // increment.mjs
// export const increment = (i) => i + 1;

// // index.mjs
// import { increment } from "./increment.mjs";
// console.log(increment(3));

// // package.json
// {
//     "name": "YYTS",
//     "version": "1.0.0",
//     "main": "index.js",
//     "type": "module",
//     "license": "Apache-2.0"
// }

/* ================================= */
/* default export                    */
/* vs                                */
/* named export                      */
/* ================================= */

// // taxIncluded.ts
// export default (price) => price * 1.08;
// // index.ts
// import taxIncluded from "./taxIncluded";
// console.log(taxIncluded(100));
// // taxIncluded.ts
// export default (price) => price * 1.1;

// // taxIncluded.ts
// export const taxIncludedAsOf2014 = (price) => price * 1.08;
// // index.ts
// import { taxIncludedAsOf2014 } from "./taxIncluded";
// console.log(taxIncludedAsOf2014(100));
