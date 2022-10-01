/* eslint-disable max-len */
/* ================================= */
/* Mapped Types                      */
/* ================================= */

// type SystemSupportLanguage = "en" | "fr" | "it" | "es";

// type Butterfly = {
//   [key in SystemSupportLanguage]: string;
// };

// const butterflies: Butterfly = {
//   en: "Butterfly",
//   fr: "Papillon",
//   it: "Farfalla",
//   es: "Mariposa",
//   de: "Schmetterling",
// };
// // Type '{ en: string; fr: string; it: string; es: string; de: string; }' is not assignable to type 'Butterfly'.
// // Object literal may only specify known properties, and 'de' does not exist in type 'Butterfly'.

// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// };

// type Identifier = symbol | 1;
// type Sample = {
//   [P in Identifier]: string;
// };
// const sample: Sample = {
//   1: "pork",
//   [Symbol("thick")]: "thin",
// };
// console.log(sample);

// type KeyValuesAndName = {
//   [K in string]: string;
//   name: string; // 追加のプロパティ
// };
// // A mapped type may not declare properties or methods.

// type KeyValues = {
//   [K in string]: string;
// };
// type Name = {
//   name: string; // 追加のプロパティ
// };
// type KeyValuesAndName = KeyValues & Name;

// type KeyValuesAndName = {
//   [K in string]: string;
// } & {
//   name: string; // 追加のプロパティ
// };
