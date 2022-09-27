/* ================================= */
/* interface                         */
/* ================================= */

// interface SomeInterface {
//   method1(): void;
//   method2(arg: string): void;
// }

// interface SomeInterface {
//   field: string;
// }

// interface Person {
//   name: string;
//   age: number;
// }

// const taro: Person = {
//   name: "太郎",
//   age: 12,
// };

/* ================================= */
/* implement interface               */
/* ================================= */

// interface Human {
//   think(): void;
// }

// class Developer implements Human {
//   think(): void {
//     console.log("どういう実装にしようかな〜");
//   }
// }

// interface Human {
//   think(): void;
// }

// interface Programmer {
//   writeCode(): void;
// }

// class TypeScriptProgrammer implements Human, Programmer {
//   think(): void {
//     console.log("どういうコードにしようかな〜");
//   }

//   writeCode(): void {
//     console.log("カタカタ");
//   }
// }

// interface Human {
//   name: string;
// }

// class Developer implements Human {
//   name: string = "Bob";
// }

/* ================================= */
/* interface                         */
/* readonly                          */
/* ================================= */

// interface SomeInterface {
//   readonly field: number;
// }

/* ================================= */
/* interface                         */
/* inheritance                       */
/* ================================= */

// interface Person {
//   name: string;
//   age: number;
// }

// interface Student extends Person {
//   grade: number; // 学年
// }

// interface Teacher extends Person {
//   students: Student[]; // 生徒
// }

// const studentA: Student = {
//   name: "花子",
//   age: 10,
//   grade: 3,
// };

// const teacher: Teacher = {
//   name: "太郎",
//   age: 30,
//   students: [studentA],
// };

// interface WebPage {
//   path: string;
// }

// interface IndexPage extends WebPage {
//   path: "/";
// }

// interface Person {
//   age: number | undefined;
// }

// interface Student extends Person {
//   age: number;
// }

/* ================================= */
/* interface                         */
/* open-ended and                    */
/* declaration merging               */
/* ================================= */

// interface Foo {}
// interface Foo {} // エラーにならない

// interface Foo {
//   a: number;
// }
// interface Foo {
//   b: number;
// }

// interface Foo {
//   a: number;
//   b: number;
// }

// interface Array<T> {
//   pop(): T | undefined;
//   push(...items: T[]): number;
//   concat(...items: ConcatArray<T>[]): T[];
//   // ...その他沢山のメソッドが続く...
// }

// interface Array<T> {
//   includes(searchElement: T, fromIndex?: number): boolean;
// }

// interface Array<T> {
//   flatMap<U, This = undefined>(
//     callback: (
//       this: This,
//       value: T,
//       index: number,
//       array: T[]
//     ) => U | ReadonlyArray<U>,
//     thisArg?: This
//   ): U[];
// }

/* ================================= */
/* interface and instanceof          */
/* ================================= */

// // 'Student' only refers to a type, but is being used as a value here.
// if (studentA instanceof Student) {
//   // ...
// }

// type UnknownObject<T extends object> = {
//   [P in keyof T]: unknown;
// };

// function isStudent(obj: unknown): obj is Student {
//   if (typeof obj !== "object") {
//     return false;
//   }
//   if (obj === null) {
//     return false;
//   }
//   const { name, age, grade } = obj as UnknownObject<Student>;
//   if (typeof name !== "string") {
//     return false;
//   }
//   if (typeof age !== "number") {
//     return false;
//   }
//   if (typeof grade !== "number") {
//     return false;
//   }
//   return true;
// }
