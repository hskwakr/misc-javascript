/* ================================= */
/* type alias                        */
/* ================================= */

// type StringOrNumber = string | number;
// const value: StringOrNumber = 123;

// // プリミティブ型
// type Str = string;
// // リテラル型
// type OK = 200;
// // 配列型
// type Numbers = number[];
// // オブジェクト型
// type UserObject = { id: number; name: string };
// // ユニオン型
// type NumberOrNull = number | null;
// // 関数型
// type CallbackFunction = (value: string) => boolean;

/* ================================= */
/* type assertion                    */
/* ================================= */

// const value: string | number = "this is a string";
// const strLength: number = (value as string).length;

// const value: string | number = "this is a string";
// const strLength: number = (<string>value).length;

// const num = 123;
// const str: string = num as string; // error

// const num = 123;
// const str: string = num as unknown as string; // OK

/* ================================= */
/* const assertion                   */
/* ================================= */

// const pikachu = {
//   name: "pikachu",
//   no: 25,
//   genre: "mouse pokémon",
//   height: 0.4,
//   weight: 6.0,
// } as const;

// pikachu.name = "raichu"; // error

// type Country = {
//   name: string;
//   capitalCity: string;
// };

// type Continent = {
//   readonly name: string;
//   readonly canada: Country;
//   readonly us: Country;
//   readonly mexico: Country;
// };

// const america: Continent = {
//   name: "North American Continent",
//   canada: {
//     name: "Republic of Canada",
//     capitalCity: "Ottawa",
//   },
//   us: {
//     name: "United States of America",
//     capitalCity: "Washington, D.C.",
//   },
//   mexico: {
//     name: "United Mexican States",
//     capitalCity: "Mexico City",
//   },
// };

// america.name = "African Continent"; // error
// america.canada = {
//   name: "Republic of Côte d'Ivoire",
//   capitalCity: "Yamoussoukro",
// }; // error

// america.canada.name = "Republic of Côte d'Ivoire"; // ok
// america.canada.capitalCity = "Yamoussoukro"; // ok

// const america = {
//   name: "North American Continent",
//   canada: {
//     name: "Republic of Canada",
//     capitalCity: "Ottawa",
//   },
//   us: {
//     name: "United States of America",
//     capitalCity: "Washington, D.C.",
//   },
//   mexico: {
//     name: "United Mexican States",
//     capitalCity: "Mexico City",
//   },
// } as const;

// america.name = "African Continent"; // error
// america.canada = {
//   name: "Republic of Côte d'Ivoire",
//   capitalCity: "Yamoussoukro",
// }; // error

// america.canada.name = "Republic of Côte d'Ivoire"; // error
// america.canada.capitalCity = "Yamoussoukro"; // error

/* ================================= */
/* typeof operator                   */
/* ================================= */

// typeof true; //=> "boolean"
// typeof 0; //=> "number"
// typeof "Hello World"; //=> "string"
// typeof undefined; //=> "undefined"
// typeof null; //=> "object"
// typeof Symbol(); //=> "symbol"
// typeof 1n; //=> "bigint"
// typeof [1, 2, 3]; //=> "object"
// typeof { a: 1, b: 2 }; //=> "object"
// typeof (() => {}); //=> "function"

// const n: unknown = "";

// if (typeof n === "string") {
// //   n.toUpperCase;
// }

// まずい実装
// function isObject(value) {
//   return typeof value === "object"; // valueがnullになる場合を考慮していない
// }
// isObject(null); // 戻り値がtrueになってしまう

// function isObject(value) {
//   return value !== null && typeof value === "object";
// }

// if (Array.isArray(n)) {
//   // n is any[]
// }
