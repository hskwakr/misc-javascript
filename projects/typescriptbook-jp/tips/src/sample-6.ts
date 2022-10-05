/* ================================= */
/* companion object                  */
/* ================================= */

// type Account = {
//   accountName: string;
//   password: string;
//   age: number;
//   plan: "Free" | "Standard" | "Premium";
// };

// const account: Account = {
//   accountName: "yyts",
//   password: "ccbyncsa30",
//   age: 80,
//   plan: "Standard",
// };

// const account = {
//   accountName: "yyts",
//   password: "ccbyncsa30",
//   age: 80,
//   plan: "Standard",
// };
// type Account = typeof account;
// // type Account = {
// //     accountName: string;
// //     password: string;
// //     age: number;
// //     plan: string;
// // }

// const account = {
//   accountName: "yyts",
//   password: "ccbyncsa30",
//   age: 80,
//   plan: "Standard",
// } as const;
// type Account = typeof account;
// // type Account = {
// //     readonly accountName: "yyts";
// //     readonly password: "ccbyncsa30";
// //     readonly age: 80;
// //     readonly plan: "Standard";
// // }

// const account = {
//   accountName: "yyts",
//   password: "ccbyncsa30",
//   age: 80,
//   plan: "Standard" as "Free" | "Standard" | "Premium",
// };
// type Account = typeof account;
// // type Account = {
// //   accountName: string;
// //   password: string;
// //   age: number;
// //   plan: "Standard" | "Free" | "Premium";
// // };
