/* ================================= */
/* Required<T>                       */
/* ================================= */

// type Person = {
//   surname: string;
//   middleName?: string;
//   givenName: string;
// };
// type RequiredPerson = Required<Person>;
// // type RequiredPerson = {
// //     surname: string;
// //     middleName: string;
// //     givenName: string;
// // }

/* ================================= */
/* Readonly<T>                       */
/* ================================= */

// type Person = {
//   surname: string;
//   middleName?: string;
//   givenName: string;
// };
// type ReadonlyPerson = Readonly<Person>;
// // type ReadonlyPerson = {
// //   readonly surname: string;
// //   readonly middleName?: string;
// //   readonly givenName: string;
// // };

/* ================================= */
/* Partial<T>                        */
/* ================================= */

// type Person = {
//   surname: string;
//   middleName?: string;
//   givenName: string;
// };
// type PartialPerson = Partial<Person>;
// // type PartialPerson = {
// //   surname?: string;
// //   middleName?: string;
// //   givenName?: string;
// // };

// type User = {
//   surname: string;
//   middleName?: string;
//   givenName: string;
//   age: number;
//   address?: string;
//   nationality: string;
//   createdAt: string;
//   updatedAt: string;
// };
// function findUsers(
//   surname?: string,
//   middleName?: string,
//   givenName?: string,
//   age?: number,
//   address?: string,
//   nationality?: string
// ) {
//   // ...
// }

// findUsers(undefined, undefined, undefined, 22);

// type FindUsersArgs = Partial<User>;
// function findUsers({
//   surname,
//   middleName,
//   givenName,
//   age,
//   address,
//   nationality,
// }: FindUsersArgs) {
//   // ...
// }
// findUsers({});

// function findUsers({
//   surname,
//   middleName,
//   givenName,
//   age,
//   address,
//   nationality,
// }: FindUsersArgs = {}) {
//   // ...
// }
// findUsers();
// findUsers({ age: 22 });

/* ================================= */
/* Record<Keys, Type>                */
/* ================================= */

// type StringNumber = Record<string, number>;
// const value: StringNumber = { a: 1, b: 2, c: 3 };
// console.log(value);

// type Person = Record<"firstName" | "middleName" | "lastName", string>;
// const person: Person = {
//   firstName: "Robert",
//   middleName: "Cecil",
//   lastName: "Martin",
// };
// console.log(person);

/* ================================= */
/* Record<Keys, Type>                */
/* ================================= */

// type User = {
//   surname: string;
//   middleName?: string;
//   givenName: string;
//   age: number;
//   address?: string;
//   nationality: string;
//   createdAt: string;
//   updatedAt: string;
// };
// type Person = Pick<User, "surname" | "middleName" | "givenName">;
// // type Person = {
// //   surname: string;
// //   middleName?: string;
// //   givenName: string;
// // };

// type Book = {
//   id: number;
//   title: string;
//   author: string;
//   createdAt: Date;
//   updatedAt: Date;
// };
// type BookInputData = {
//   title: string;
//   author: string;
// };

// type Book = {
//   id: number;
//   title: string;
//   author: Person; // 変更箇所
//   createdAt: Date;
//   updatedAt: Date;
// };
// type BookInputData = {
//   title: string;
//   author: Person; // 変更箇所
// };

// type BookInputData = Pick<Book, "title" | "author">;

/* ================================= */
/* Omit<T, Keys>                     */
/* ================================= */

// type User = {
//   surname: string;
//   middleName?: string;
//   givenName: string;
//   age: number;
//   address?: string;
//   nationality: string;
//   createdAt: string;
//   updatedAt: string;
// };
// type Optional = "age" | "address" | "nationality" | "createdAt" | "updatedAt";
// type Person = Omit<User, Optional>;
// // type Person = {
// //   surname: string;
// //   middleName?: string;
// //   givenName: string;
// // };

// type User = {
//   surname: string;
//   middleName?: string;
//   givenName: string;
//   age: number;
//   address?: string;
//   nationality: string;
//   createdAt: string;
//   updatedAt: string;
// };
// type Optional = "createdat" | "updatedat" | "age" | "address" | "nationality";
// type Person = Omit<User, Optional>;
// // このPersonは下の型になる
// // type Person = {
// //   surname: string;
// //   middleName?: string | undefined;
// //   givenName: string;
// //   createdAt: string;
// //   updatedAt: string;
// // };

/* ================================= */
/* Exclude<T, U>                     */
/* ================================= */

// type Grade = "A" | "B" | "C" | "D" | "E";
// type PassGrade = Exclude<Grade, "E">;
// // type PassGrade = "A" | "B" | "C" | "D";

// type Grade = "A" | "B" | "C" | "D" | "E";
// type PassGrade = Exclude<Grade, "D" | "E">;
// // type PassGrade = "A" | "B" | "C"

// type PullRequestState = "draft" | "reviewed" | "rejected";
// type MergeableState = Exclude<PullRequestState, "draft" | "rejected">;
// // type MergeableState = "reviewed"

// type PullRequestState = "draft" | "reviewed" | "rejected" | "testFailed";
// type MergeableState = Exclude<PullRequestState, "draft" | "rejected">;
// // type MergeableState = "reviewed" | "testFailed"

// type PullRequestState = "open" | "reviewed" | "rejected";
// type MergeableState = Exclude<PullRequestState, "draft" | "rejected">;
// // type MergeableState = "open" | "reviewed"

/* ================================= */
/* Extract<T, U>                     */
/* ================================= */

// type Grade = "A" | "B" | "C" | "D" | "E";
// type FailGrade = Extract<Grade, "D" | "E">;
// // type CommonTypes = Extract<"a" | "b" | "c", "b" | "c" | "d">;
