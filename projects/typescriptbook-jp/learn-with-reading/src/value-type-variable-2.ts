/* ================================= */
/* Object                            */
/* ================================= */

// const value1 = 123;
// const value2 = 123;
// console.log(value1 == value2); // true

// const object1 = { value: 123 };
// const object2 = { value: 123 };
// console.log(object1 == object2); // false

/* ================================= */
/* Object literal                    */
/* ================================= */

// // 空っぽのオブジェクトを生成
// const object = {};
// // プロパティを指定しながらオブジェクトを生成
// const person = { name: "Bob", age: 25 };

// const person = new Object();
// person.name = "Bob";
// person.age = 25;

/* ================================= */
/* Object property                   */
/* ================================= */

// const product = {
//   name: "ミネラルウォーター",
//   price: 100,
//   getTaxIncludedPrice: function () {
//     return Math.floor(this.price * 1.1);
//   },
//   shomikigen: new Date("2022-01-20"),
// };

// const object = {
//   // キーと値に分けて書いたメソッド定義
//   printHello1: function () {
//     console.log("Hello");
//   },
//   // 短い構文を用いたメソッド定義
//   printHello2() {
//     console.log("Hello");
//   },
// };

// const calculator = {
//   sum(a, b) {
//     return a + b;
//   },
// };
// calculator.sum(1, 1);
// calculator.sum = null;
// calculator.sum(1, 1); // ここではもうメソッドではないので、呼び出すとエラーになります

/* ================================= */
/* Object                            */
/* type annotation                   */
/* ================================= */

// let box: { width: number; height: number };
// box = { width: 1080, height: 720 };

// let box: { width: number; height: number };
// // 誤ってプロパティに文字列を代入した
// box = { width: "1080", height: 720 }; // error
// // 誤ってheightを指定し忘れた
// box = { width: 1080 }; // error

// let box: {
//   width: number;
//   height: number;
// };
// box = { width: 1080, height: 720 };

// // 型エイリアス
// type Box = { width: number; height: number };
// let box: Box = { width: 1080, height: 720 };
// //       ^^^型注釈

// let calculator: {
//   sum(x: number, y: number): number;
// };
// calculator = {
//   sum(x, y) {
//     return x + y;
//   },
// };

// let calculator: {
//   sum: (x: number, y: number) => number;
// };

// let box = { width: 1080, height: 720 };
// let calculator = {
//   sum(x: number, y: number) {
//     return x + y;
//   },
// };
// calculator;

// let foo: Record<string, number>;
// foo = { a: 1, b: 2 };

// let box: object;
// box = { width: 1080, height: 720 };

/* ================================= */
/* Object                            */
/* readonly property                 */
/* ================================= */

// let obj: {
//   readonly foo: number;
// };
// obj = { foo: 1 };
// obj.foo = 2; // error

// let obj: {
//   readonly foo: {
//     bar: number;
//   };
// };
// obj = {
//   foo: {
//     bar: 1,
//   },
// };
// obj.foo = { bar: 2 }; // error
// obj.foo.bar = 2; // コンパイルエラーにはならない

// let obj: {
//   readonly foo: {
//     readonly bar: number;
//   };
// };

// const obj: { readonly foo: number } = { foo: 1 };
// obj.foo = 2; // コンパイルエラーになる

// // after compile
// const obj = { foo: 1 };
// obj.foo = 2; // 実行時エラーにはならない

// let obj: Readonly<{
//   a: number;
//   b: number;
//   c: number;
//   d: number;
//   e: number;
//   f: number;
// }>;

/* ================================= */
/* Object                            */
/* readonly vs const                 */
/* ================================= */

// const x = 1;
// x = 2; // error

// const x = { y: 1 };
// x = { y: 2 }; // 変数そのものへの代入は不可
// x.y = 2; // プロパティへの代入は許可

// let obj: { readonly x: number } = { x: 1 };
// obj.x = 2; // error

// let obj: { readonly x: number } = { x: 1 };
// obj = { x: 2 }; // 許可される

// const obj: { readonly x: number } = { x: 1 };
// obj = { x: 2 }; // error
// obj.x = 2; // error

/* ================================= */
/* Object                            */
/* optional property                 */
/* ================================= */

// let size: { width?: number };
// size = {}; // OK
// size = { width: undefined }; // OK
// size = { width: null }; // error

/* ================================= */
/* Object                            */
/* excess property checking          */
/* ================================= */

// let onlyX: { x: number };
// onlyX = { x: 1 }; // OK
// onlyX = { x: 1, y: 2 }; // コンパイルエラー

// const xy: { x: number; y: number } = { x: 1, y: 2 };
// let onlyX: { x: number };
// onlyX = xy; // OK

/* ================================= */
/* Object                            */
/* index signature                   */
/* ================================= */

// let obj: {
//   [K: string]: number;
// };

// let obj: {
//   [K: string]: number;
// };
// obj = { a: 1, b: 2 }; // OK
// obj.c = 4; // OK
// obj["d"] = 5; // OK

// const obj: { [K: string]: number } = { a: 1 };
// const b: number | undefined = obj.b;
// console.log(b);

// // same
// let obj1: { [K: string]: number };
// let obj2: Record<string, number>;

/* ================================= */
/* Object                            */
/* prototype                         */
/* ================================= */

// const button = {
//   name: "ボタン",
// };
// const dangerousButton = Object.create(button);
// dangerousButton.name = "絶対に押すなよ？";

// console.log(button.name); // ボタン
// console.log(dangerousButton.name); // 絶対に押すなよ？

// const counter = {
//   count: 0,
//   countUp() {
//     this.count++;
//   },
// };
// const resettableCounter = Object.create(counter);
// resettableCounter.reset = function () {
//   this.count = 0;
// };

// class Counter {
//   constructor() {
//     this.count = 0;
//   }
//   countUp() {
//     this.count++;
//   }
// }

/* ================================= */
/* Object                            */
/* object vs Object vs {}            */
/* ================================= */

// let obj: { a: number; b: number };

// let a: object;
// let b: Object;
// let c: {};

// const a: object = {}; // OK
// const b: Object = {}; // OK
// const c: {} = {}; // OK

// let a: object;
// a = { x: 1 }; // OK
// a = [1, 2, 3]; // OK。配列はオブジェクト
// a = /a-z/; // OK。正規表現はオブジェクト

// // プリミティブ型はNG
// a = 1; // error
// a = true; // error
// a = "string"; // error

// let a: Object;
// a = {}; // OK

// // ボックス化可能なプリミティブ型OK
// a = 1; // OK
// a = true; // OK
// a = "string"; // OK

// // nullとundefinedはNG
// a = null; // error
// a = undefined; // error

// let a: {};
// a = {}; // OK

// // ボックス化可能なプリミティブ型OK
// a = 1; // OK
// a = true; // OK
// a = "string"; // OK

// // nullとundefinedはNG
// a = null; // error
// a = undefined; // error

/* ================================= */
/* Object                            */
/* destructuring assignment          */
/* ================================= */

// const item = { price: 100 };
// const price = item.price; // プロパティアクセサー

// const item = { price: 100 };
// const { price } = item;
// // 上は const price = item.price; と同等の処理

// const obj = { a: 1, b: 2 };
// const { a, b } = obj;

// const color = { r: 0, g: 122, b: 204, a: 1 };
// const r = color.r;
// const g = color.g;
// const b = color.b;
// const a = color.a;

// const color = {
//   r: 0,
//   g: 122,
//   b: 204,
//   a: 1,
// };
// const { r, g, b, a } = color;

// const color = { r: 0, g: 122, b: 204, a: 1 };
// const { r: red, g: green, b: blue, a: alpha } = color;
// console.log(green); // 122

// const continent = {
//   name: "北アメリカ",
//   us: {
//     name: "アメリカ合衆国",
//     capitalCity: "ワシントンD.C.",
//   },
// };
// const {
//   us: { name, capitalCity },
// } = continent;

// console.log(name); // アメリカ合衆国
// console.log(capitalCity); // ワシントンD.C.

// const continent = {
//   name: "北アメリカ",
//   us: {
//     name: "アメリカ合衆国",
//     capitalCity: "ワシントンD.C.",
//   },
// };
// const {
//   name: continentName,
//   us: { name: countryName },
// } = continent;

// console.log(continentName); // 北アメリカ
// console.log(countryName); // アメリカ合衆国

// const color = { r: undefined, g: 122, b: 204 };
// const { r = 0, g = 0, b = 0 } = color;
// console.log(r, g, b); // 0, 122, 204

// const color = { r: null };
// const { r = 0 } = color;
// console.log(r); // null

// const color = { r: undefined, g: 122, b: 204 };
// const { r: red = 0 } = color;
// console.log(red); // 0

/* ================================= */
/* Object                            */
/* Shorthand property names          */
/* ================================= */

// type Wild = {
//   name: string;
//   no: number;
//   genre: string;
//   height: number;
//   weight: number;
// };

// const name = "pikachu";
// const no = 25;
// const genre = "mouse pokémon";
// const height = 0.4;
// const weight = 6.0;

// const pikachu: Wild = {
//   name,
//   no,
//   genre,
//   height,
//   weight,
// };

// const pikachu: Wild = {
//   name: name,
//   no: no,
//   genre: genre,
//   height: height,
//   weight: weight,
// };

/* ================================= */
/* Object                            */
/* optional chaining                 */
/* ================================= */

// const book = undefined;
// const title = book.title; // error

// const author = null;
// const email = author.email; // error

// const book = undefined;
// const title = book === null || book === undefined ? undefined : book.title;
// console.log(title); // undefined

// const book = { title: "サバイバルTypeScript" };
// const title = book === null || book === undefined ? undefined : book.title;
// console.log(title); // "サバイバルTypeScript"

// const book = { author: { email: "alice@example.com" } };
// const authorEmail =
//   book === null || book === undefined
//     ? undefined
//     : book.author === null || book.author === undefined
//     ? undefined
//     : book.author.email;

// const book = undefined;
// const title = book?.title;
// //                ^^オプショナルチェーン
// console.log(title); // undefined

// const book = { title: "サバイバルTypeScript" };
// const title = book?.title;
// console.log(title); // "サバイバルTypeScript"

// const book = undefined;
// const authorEmail = book?.author?.email;
// console.log(authorEmail); // undefined

// const book = { author: { email: "alice@example.com" } };
// const authorEmail = book?.author?.email;
// console.log(authorEmail); // "alice@example.com"

// const book = null;
// console.log(book?.title); // undefined

// const book = { author: null };
// console.log(book.author?.name); // undefined

// const increment = undefined;
// const result = increment?.(1);
// console.log(result); // undefined

// const increment = (n) => n + 1;
// const result = increment?.(1);
// console.log(result); // 2

// const book = { getPrice: undefined };
// console.log(book.getPrice?.()); // undefined

// const book = {
//   getPrice() {
//     return 0;
//   },
// };
// console.log(book.getPrice?.()); // 0

// const books = undefined;
// const title = books?.[0];
// console.log(title); // undefined

// const books = ["サバイバルTypeScript"];
// const title = books?.[0];
// console.log(title); // "サバイバルTypeScript"

// let book: undefined | { title: string };
// const title = book?.title;

// // after compile
// const title = book === null || book === void 0 ? void 0 : book.title;

// const book = undefined;
// const title = book?.title ?? "デフォルトタイトル";
// console.log(title); // "デフォルトタイトル"

/* ================================= */
/* Object                            */
/* loop for object                   */
/* ================================= */

// const foo = { a: 1, b: 2, c: 3 };
// for (const prop in foo) {
//   console.log(prop, foo[prop]);
//   // a 1
//   // b 2
//   // c 3 の順で出力される
// }

// const foo = { a: 1, b: 2, c: 3 };
// console.log(Object.getPrototypeOf(foo) === Object.prototype);

// const foo = { a: 1 };
// const date = new Date();
// const arr = [1, 2, 3];

// // どのオブジェクトもhiプロパティが無いことを確認
// console.log(foo.hi, date.hi, arr.hi); // undefined undefined undefined

// // プロトタイプにプロパティを追加する
// Object.prototype.hi = "Hi!";

// // どのオブジェクトもhiプロパティを持つようになる
// console.log(foo.hi, date.hi, arr.hi); // Hi! Hi! Hi!

// const foo = { a: 1, b: 2, c: 3 };
// Object.prototype.hi = "Hi!";
// for (const prop in foo) {
//   console.log(prop, foo[prop]);
//   // a 1
//   // b 2
//   // c 3
//   // hi Hi! の順で出力される
// }

// const foo = { a: 1, b: 2, c: 3 };
// Object.prototype.hi = "Hi!";
// for (const prop in foo) {
//   if (Object.prototype.hasOwnProperty.call(foo, prop)) {
//     console.log(prop, foo[prop]);
//     // a 1
//     // b 2
//     // c 3  の順で出力される
//   }
// }

// const foo = { a: 1, b: 2, c: 3 };
// for (const [key, value] of Object.entries(foo)) {
//   console.log(key, value);
//   // a 1
//   // b 2
//   // c 3 の順で出力される
// }

// const foo = { a: 1, b: 2, c: 3 };
// for (const key of Object.keys(foo)) {
//   console.log(key);
//   // a
//   // b
//   // c の順で出力される
// }

// const foo = { a: 1, b: 2, c: 3 };
// for (const value of Object.values(foo)) {
//   console.log(value);
//   // 1
//   // 2
//   // 3 の順で出力される
// }

/* ================================= */
/* Structural subtyping              */
/* ================================= */

// class File extends InputSource {
//   public readonly destination: string;
//   public constructor(destination: string) {
//     super();
//     this.destination = destination;
//   }
//   public fetch(): Data {
//     const reader: Reader = FileSystem.readFrom(this.destination);
//     // ...
//     return data;
//   }
// }

// class Request extends InputSource {
//   public readonly destination: string;
//   public constructor(destination: string) {
//     super();
//     this.destination = destination;
//   }
//   public fetch(): Data {
//     const response: Response = HTTPRequest.get(this.destination);
//     // ...
//     return data;
//   }
// }

// const source1: InputSource = new File("/data/~~~.txt");
// const source2: InputSource = new Request("https://~~~~");
// const data1: Data = source1.fetch();
// const data2: Data = source2.fetch();

// const source3: Request = new File("/data/~~~.txt"); // not error
// const source4: File = new Request("https://~~~~"); // not error
// const data3: Data = source3.fetch();
// const data4: Data = source4.fetch();

// class File {
//   public destination: string;
//   public constructor(destination: string) {
//     this.destination = destination;
//   }
//   public fetch(): Data {
//     const reader: Reader = FileSystem.readFrom(this.destination);
//     // ...
//     return data;
//   }
// }

// class Request {
//   public destination: string;
//   public constructor(destination: string) {
//     this.destination = destination;
//   }
//   public fetch(): Data {
//     const response: Response = HTTPRequest.get(this.destination);
//     // ...
//     return data;
//   }
// }

// const source3: Request = new File("/data/~~~.txt"); // not error
// const source4: File = new Request("https://~~~~"); // not error
// const data3: Data = source3.fetch();
// const data4: Data = source4.fetch();
