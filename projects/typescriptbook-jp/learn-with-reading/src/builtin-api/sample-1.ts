/* ================================= */
/* Map<K, V>                         */
/* ================================= */

// const map = new Map<string, number>();
// map.set("a", 1);
// console.log(map.get("a")); // 1

// const map = new Map<string, number>([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ]);
// console.log(map); // Map (3) {"a" => 1, "b" => 2, "c" => 3}

// const map = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ]);
// map; // const map: Map<string, number>

// const map = new Map(); // const map: Map<any, any>

// function doSomething(map: Map<string, number>) {}

// const map = new Map<any, any>([[null, 1]]);
// console.log(map.has(null)); // true
// console.log(map.has(undefined)); // false

// console.log(NaN === NaN); // false

// const map = new Map<number, number>();
// map.set(NaN, 1);
// map.set(NaN, 2);
// console.log(map); // Map (1) {NaN => 2}

// console.log({} == {}); // false
// console.log({} === {}); // false

// const map = new Map<object, number>();
// map.set({}, 1);
// map.set({}, 2);
// console.log(map); // Map (2) {{} => 1, {} => 2}

// const map = new Map<string, number>();
// map.set("a", 1);
// console.log(map);

// const map = new Map([["a", 1]]);
// map.set("a", 5);
// console.log(map);

// const map = new Map([["a", 1]]);
// console.log(map.get("a"));

// const map = new Map([["a", 1]]);
// console.log(map.get("b"));

// const map = new Map([["a", 1]]);
// console.log(map.get("b") ?? 2);

// const map = new Map([
//   ["a", 1],
//   ["b", 2],
// ]);
// map.delete("a");
// console.log(map);

// const map = new Map([["a", 1]]);
// console.log(map.delete("a")); // true
// console.log(map.delete("b")); // false

// const map = new Map([["a", 1]]);
// console.log(map.has("a")); // true
// console.log(map.has("b")); // false

// const map = new Map([["a", 1]]);
// if (map.has("a")) {
//   // TypeScriptは"a"があることを認識しない
//   const n = map.get("a");
//   // n * 2;
// }

// const map = new Map([["a", 1]]);
// const n = map.get("a");
// if (typeof n === "number") {
//   // n * 2;
// }

// const map = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ]);
// console.log(map.size); // 3

// const map = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ]);
// console.log(map.size); // 3
// map.clear();
// console.log(map.size); // 0

// const map = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ]);
// const keys = [...map.keys()];
// console.log(keys);

// const map = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ]);
// const values = [...map.values()];
// console.log(values);

// const map = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ]);
// const keyValues = [...map.entries()];
// console.log(keyValues);

// const map = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ]);
// for (const [key, value] of map) {
//   console.log(key, value);
//   // "a", 1
//   // "b", 2
//   // "c", 3 の順で出力される
// }

// const map1 = new Map([["a", 1]]);
// const map2 = new Map(map1);
// console.log(map2);

// const map = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ]);
// console.log(JSON.stringify(map)); // "{}"

// const map = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ]);
// const obj = Object.fromEntries(map);
// console.log(JSON.stringify(obj));

// const map = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ]);
// const keyValues = [...map];
// console.log(keyValues);

// const obj = { a: 1, b: 2, c: 3 };
// const map = new Map(Object.entries(obj));
// console.log(map);

// const map = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ]);
// const obj = Object.fromEntries(map);
// console.log(obj);

// const obj = {};
// console.log(obj.toString); // function toString() { [native code] }
// obj.toString = 1;
// console.log(obj.toString); // 1

// const map = new Map<string, any>();
// console.log(map.toString); // function toString() { [native code] }
// map.set("toString", 1);
// console.log(map.toString); // function toString() { [native code] }
