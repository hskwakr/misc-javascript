/* ================================= */
/* exception                         */
/* ================================= */

// try {
//   throw new Error("something wrong");
// } catch (e) {
//   // something wrong
//   console.log(e.message);
// }

// throw new Error("network error!");
// throw "just a string";

// try {
//   throw new Error("something wrong");
// } catch (e) {
//   console.error(e);
// }

// try {
//   // ...
// } catch (e) {} // e :any

// try {
//   // ...
// } catch (e) {
//   if (e instanceof TypeError) {
//     // TypeErrorに対する処理
//   } else if (e instanceof RangeError) {
//     // RangeErrorに対する処理
//   } else if (e instanceof EvalError) {
//     // EvalErrorに対する処理
//   } else {
//     // その他のエラー
//   }
// }

// async function fetchData() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const data = await res.json();
//     console.log(data); // dataが参照できる
//   } catch (e: unknown) {
//     return;
//   }
//   console.log(data); // dataが参照できない
// }
// fetchData();

// async function fetchData() {
//   let data: any;
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     data = await res.json();
//   } catch (e: unknown) {
//     return;
//   }
//   console.log(data); // dataが参照できる
// }
// fetchData();

// try {
//   // ...
// } catch (e) {
//   // ...
// } finally {
//   // ...
// }

/* ================================= */
/* never type                        */
/* ================================= */

// const foo: never = 1; // error

// const any: any = 1;
// const foo: never = any; // error

// const foo: never = 1 as never; //ok

// const nev = 1 as never;
// const a: string = nev; // 代入OK
// const b: string[] = nev; // 代入OK

// function throwError(): never {
//   throw new Error();
// }

// function forever(): never {
//   while (true) {} // 無限ループ
// }

// type NumberString = number & string; // never

// const ok: void = undefined;
// const ng: never = undefined; // error

// function func(): never {} // error

// type Extension = "js" | "ts" | "json";

// // bad
// function printLang(ext: Extension): void {
//   switch (ext) {
//     case "js":
//       console.log("JavaScript");
//       break;
//     case "ts":
//       console.log("TypeScript");
//       break;
//     // "json"に対する分岐がない
//   }
// }

// // better
// function printLang(ext: Extension): void {
//   switch (ext) {
//     case "js":
//       console.log("JavaScript");
//       break;
//     case "ts":
//       console.log("TypeScript");
//       break;
//     default:
//       const exhaustivenessCheck: never = ext;
//       break;
//   }
// }

// // more better
// class ExhaustiveError extends Error {
//   constructor(value: never, message = `Unsupported type: ${value}`) {
//     super(message);
//   }
// }
// function printLang(ext: Extension): void {
//   switch (ext) {
//     case "js":
//       console.log("JavaScript");
//       break;
//     case "ts":
//       console.log("TypeScript");
//       break;
//     default:
//       throw new ExhaustiveError(ext);
//   }
// }

/* ================================= */
/* Control flow and type guard       */
/* ================================= */

// function showMonth(month: string | number) {
//   console.log(month.padStart(2, "0")); // error
// }

// function showMonth(month: string | number) {
//   if (typeof month === "string") {
//     console.log(month.padStart(2, "0"));
//   }
// }

// function showMonth(month: string | number) {
//   if (typeof month === "string") {
//     console.log(month.padStart(2, "0"));
//   }
//   console.log(month.toFixed()); // error
// }

// function showMonth(month: string | number) {
//   if (typeof month === "string") {
//     console.log(month.padStart(2, "0"));
//     return;
//   }
//   console.log(month.toFixed());
// }

// function getMonth(date: string | Date | null) {
//   if (typeof date === "object") {
//     console.log(date.getMonth() + 1); // error: possibly null
//   }
// }

// function getMonth(date: string | Date | null) {
//   if (typeof date === "object" && date != null) {
//     console.log(date.getMonth() + 1);
//   }
// }

// function getMonth(date: string | Date) {
//   if (date instanceof Date) {
//     console.log(date.getMonth() + 1);
//   }
// }

// interface Wizard {
//   castMagic(): void;
// }
// interface SwordMan {
//   slashSword(): void;
// }

// function attack(player: Wizard | SwordMan) {
//   if ("castMagic" in player) {
//     player.castMagic();
//   } else {
//     player.slashSword();
//   }
// }

// function isWizard(player: Player): player is Wizard {
//   return "castMagic" in player;
// }

// function attack(player: Wizard | SwordMan) {
//   if (isWizard(player)) {
//     player.castMagic();
//   } else {
//     player.slashSword();
//   }
// }

// function getMonth(date: string | Date) {
//   const isDate = date instanceof Date;
//   if (isDate) {
//     console.log(date.getMonth() + 1);
//   }
// }

/* ================================= */
/* unknown type                      */
/* ================================= */

// let value: unknown;
// value = 1; // OK
// value = "string"; // OK
// value = { name: "オブジェクト" }; // OK

// const value: any = 10;
// const int: number = value;
// const bool: boolean = value;
// const str: string = value;
// const obj: object = value;

// const value: unknown = 10;
// const int: number = value; // error
// const bool: boolean = value; // error
// const str: string = value; // error
// const obj: object = value; // error

// const any: any = value; // OK
// const unknown: unknown = value; // OK

// const value: unknown = 10;
// value.toFixed(); // error

// const obj: unknown = { name: "オブジェクト" };
// obj.name; // error

// const value: unknown = "";
// // 型ガード
// if (typeof value === "string") {
//   // ここブロックではvalueはstring型として扱える
//   console.log(value.toUpperCase());
// }

// // 型ガード関数
// function isObject(value: unknown): value is object {
//   return typeof value === "object" && value !== null;
// }
// const value: unknown = { a: 1, b: 2 };
// // 型ガード
// if (isObject(value)) {
//   console.log(Object.keys(value));
//   // ここでは、valueはobject型として扱える
// }

// function isNumberArray(value: unknown): value is number[] {
//   if (!Array.isArray(value)) {
//     return false;
//   }
//   return value.every((e) => typeof e === "number");
// }

// type Email = {
//   from: string;
//   to: string;
//   title: string;
//   subject: string;
// };
// // not enough
// function isEmail(value: unknown): value is Email {
//   if (typeof value !== "object" || value === null) {
//     return false;
//   }
//   return true;
// }

// // not bad but error
// function isEmail(value: unknown): value is Email {
//   if (typeof value !== "object" || value === null) {
//     return false;
//   }
//   // 各プロパティのチェック
//   if (typeof value.from !== "string") { // error
//     return false;
//   }
//   return true;
// }

// // not bad
// function isEmail(value: unknown): value is Email {
//   if (typeof value !== "object" || value === null) {
//     return false;
//   }
//   // 型アサーションでvalueをEmail型に近づける
//   const email = value as Record<keyof Email, unknown>;
//   // 各プロパティのチェック
//   if (typeof email.from !== "string") {
//     return false;
//   }
//   return true;
// }

// type MayBeEmail = Record<keyof Email, unknown>;

// const data: unknown = JSON.parse("...");

// const str = "a";
// const num = str as number; // error

// const str = "a";
// const num = str as unknown as number;

/* ================================= */
/* diff between any and unknown      */
/* ================================= */

// const any1: any = null;
// const any2: any = undefined;
// const any3: any = true;
// const any4: any = 0.8;
// const any5: any = "Comment allez-vous";
// const any6: any = {
//   x: 0,
//   y: 1,
//   name: "origin",
// };

// const unknown1: unknown = null;
// const unknown2: unknown = undefined;
// const unknown3: unknown = true;
// const unknown4: unknown = 0.8;
// const unknown5: unknown = "Comment allez-vous";
// const unknown6: unknown = {
//   x: 0,
//   y: 1,
//   name: "origin",
// };

// console.log(any4.toFixed()); // 1
// console.log(any5.length); // 18
// console.log(any6.name); // origin

// console.log(unknown4.toFixed()); // error
// console.log(unknown5.length); // error
// console.log(unknown6.name); // error

// console.log(any6.x.y.z);
// console.log(unknown6.x.y.z);
