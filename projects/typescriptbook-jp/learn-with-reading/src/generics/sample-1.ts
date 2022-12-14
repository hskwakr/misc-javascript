/* eslint-disable max-classes-per-file */
/* ================================= */
/* generics                          */
/* ================================= */

// function chooseRandomlyString(v1: string, v2: string): string {
//   return Math.random() <= 0.5 ? v1 : v2;
// }

// const winOrLose = chooseRandomlyString("勝ち", "負け");

// // 数値用の抽選関数
// function chooseRandomlyNumber(v1: number, v2: number): number {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// const num: number = chooseRandomlyNumber(1, 2);

// // URLオブジェクト向けの抽選関数
// function chooseRandomlyURL(v1: URL, v2: URL): URL {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// const url: URL = chooseRandomlyURL(urlA, urlB);

// // 重複した3つの関数
// function chooseRandomlyString(v1: string, v2: string): string {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// function chooseRandomlyNumber(v1: number, v2: number): number {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// function chooseRandomlyURL(v1: URL, v2: URL): URL {
//   return Math.random() <= 0.5 ? v1 : v2;
// }

// function chooseRandomly(v1: any, v2: any): any {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// let str = chooseRandomly(0, 1);
// str = str.toLowerCase();

// function chooseRandomly<String>(v1: <string>, v2: <string>): <string> {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// function chooseRandomly<Number>(v1: <number>, v2: <number>): <number> {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// function chooseRandomly<URL>(v1: <URL>, v2: <URL>): <URL> {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// chooseRandomly<String>("勝ち", "負け");
// chooseRandomly<Number>(1, 2);
// chooseRandomly<URL>(urlA, urlB);

// // 注意: これは架空の文法です
// function chooseRandomly<type>(v1: <type>, v2: <type>): <type> {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// chooseRandomly<string>("勝ち", "負け");
// chooseRandomly<number>(1, 2);
// chooseRandomly<URL>(urlA, urlB);

// function chooseRandomly<T>(v1: T, v2: T): T {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// chooseRandomly<string>("勝ち", "負け");
// chooseRandomly<number>(1, 2);
// chooseRandomly<URL>(urlA, urlB);

// function chooseRandomly<T>(v1: T, v2: T): T {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// let str = chooseRandomly<string>(0, 1);
// // Argument of type 'number' is not assignable to parameter of type 'string'.
// str = str.toLowerCase();

/* ================================= */
/* built in libraries using generics */
/* ================================= */

// const numbers: Array<number> = [1, 2, 3, 4];
// const numbers: number[] = [1, 2, 3, 4];

// const textNumbers = ["1", "2", "3", "4"];
// const numbers = textNumbers.map<number>(function (text: string) {
//   return Number(text);
// });

// type Address = {
//   country: string;
//   postalCode: string;
//   address1: string;
// };
// const addresses = new Map<string, Address>();
// addresses.set("太郎", {
//   country: "日本",
//   postalCode: "8256405",
//   address1: "東京都",
// });
// console.log(addresses.get("太郎"));

/* ================================= */
/* type variables                    */
/* ================================= */

// function printAndReturn<T>(value: T): T {
//   console.log(value);
//   return value;
// }

// function printAndReturn<T>(value: T): T {
//   let values: T[] = []; // OK
//   const doSomething = (value: T) => {}; // OK
//   return value;
// }
// let value: T; // Cannot find name 'T'.

// const value = printAndReturn<number>(123);

// const value = printAndReturn<number>(123);
// const value = printAndReturn(123);

// function func1<T>(x: T) {}
// function func2<Foo>(x: Foo) {}
// function func3<fooBar>(x: fooBar) {}
// function func4<$>(x: $) {}
// function func5<かた>(x: かた) {}

// function func1<1>(x: 1) {} // コンパイルエラー
// function func2<class>(x: class) {} // コンパイルエラー

// function compare<T, U>(a: T, b: U) {}
// function makeKeyValuePair<TKey, TValue>(key: TKey, value: TValue) {}

/* ================================= */
/* type parameter constraint         */
/* ================================= */

// function changeBackgroundColor<T>(element: T) {
//   // Property 'style' does not exist on type 'T'.(2339)
//   element.style.backgroundColor = "red";
//   return element;
// }

// function changeBackgroundColor<T>(element: T) {
//   // any に型アサーションすればコンパイルエラーは回避できる
//   // 型チェックされないのでバグの可能性
//   (element as any).style.backgroundColor = "red";
//   return element;
// }

// function changeBackgroundColor<T extends HTMLElement>(element: T) {
//   element.style.backgroundColor = "red";
//   return element;
// }

// interface ValueObject<T> {
//   value: T;

//   toString(): string;
// }

// class UserID implements ValueObject<number> {
//   public value: number;

//   public constructor(value: number) {
//     this.value = value;
//   }

//   public toString(): string {
//     return `${this.value}`;
//   }
// }

// class Entity<ID extends ValueObject<unknown>> {
//   private id: ID;

//   public constructor(id: ID) {
//     this.id = id;
//   }

//   //...
// }

/* ================================= */
/* default type parameter            */
/* ================================= */

// type MyErrorEvent<T> = {
//   error: T;
//   type: string;
// };

// class NetworkError extends Error {
//   constructor(e?: string) {
//     super(e);
//     this.name = new.target.name;
//   }
// }

// const errorEvent: MyErrorEvent<Error> = {
//   error: new Error("エラーです"),
//   type: "syntax",
// };

// const networkErrorEvent: MyErrorEvent<NetworkError> = {
//   error: new NetworkError("ネットワークエラーです"),
//   type: "network",
// };

// // 型 T が必須なので、MyErrorEvent<Error>と指定する必要がある。
// const errorEvent: MyErrorEvent = {
//   error: new Error("エラーです"),
//   type: "syntax",
// };

// // デフォルト型引数を指定した事で Error の型指定を省略できる
// const errorEvent: MyErrorEvent = {
//   error: new Error("エラーです"),
//   type: "syntax",
// };

// const networkErrorEvent: MyErrorEvent<NetworkError> = {
//   error: new NetworkError("ネットワークエラーです"),
//   type: "network",
// };

// type MyErrorEvent<T extends Error = SyntaxError> = {
//   error: T;
//   type: string;
// };

// interface Serializable<T extends string | number = bigint> {
//   value: T;
//   toString(): string;
// }
// // Type 'bigint' does not satisfy the constraint 'string | number'.

// class Aubergine<A, B = A, C = B> {
//   private readonly a: A;

//   private readonly b: B;

//   private readonly c: C;

//   public constructor(a: A, b: B, c: C) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//   }
//   // ...
// }

// // Type parameter defaults can only reference previously declared type parameters.
// // Required type parameters may not follow optional type parameters.
// class Aubergine<A = B, B, C = B> {
//   private readonly a: A;

//   private readonly b: B;

//   private readonly c: C;

//   public constructor(a: A, b: B, c: C) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//   }
// }
