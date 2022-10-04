/* eslint-disable max-len */
/* ================================= */
/* shallow copy object               */
/* ================================= */

// type MealsPerDay = {
//   breakfast: string;
//   lunch: string;
//   dinner: string;
// };

// function willBeMetabo(meals: MealsPerDay): boolean {
//   // ...
// }

// // 439.2 kcal
// const meals: MealsPerDay = {
//   breakfast: "a vegetable salad",
//   lunch: "a cod's meuniere",
//   dinner: "a half bottle of wine (white)",
// };
// willBeMetabo(meals);

// function isMeals(meals: MealsPerDay): void {
//   if (!isMeal(meals.breakfast)) {
//     throw new Error("BREAKFAST IS NOT A MEAL!");
//   }
//   if (!isMeal(meals.lunch)) {
//     throw new Error("LUNCH IS NOT A MEAL!!!");
//   }
//   if (!isMeal(meals.dinner)) {
//     throw new Error("DINNER IS NOT A MEAL!!!");
//   }
// }

// function shouldBeCareful(meals: MealsPerDay): boolean {
//   try {
//     // ...
//     isMeals(meals);
//     return willBeMetabo(meals);
//   } catch (err: unknown) {
//     // ...
//   }
// }

// function isMeals(meals: MealsPerDay): void {
//   meals.breakfast = "a beef steak";
//   // beef steak will be 1200 kcal
//   meals.lunch = "a bucket of ice cream";
//   // a bucket of ice cream will be 7200 kcal
//   meals.dinner = "3 pizzas";
//   // 3 pizzas will be 11400 kcal
//   if (!isMeal(meals.breakfast)) {
//     throw new Error("BREAKFAST IS NOT MEAL!");
//   }
//   if (!isMeal(meals.lunch)) {
//     throw new Error("LUNCH IS NOT MEAL!!!");
//   }
//   if (!isMeal(meals.dinner)) {
//     throw new Error("DINNER IS NOT MEAL!!!");
//   }
// }
// console.log(meals);
// isMeals(meals);
// console.log(meals);
// willBeMetabo(meals);
// // 439.2 kcal
// // 19,800 kcal!!!
// // true

// const object1: object = {};
// const object2: object = shallowCopy(object1);
// console.log(object1 === object2); // false

// const scapegoat: MealsPerDay = shallowCopy(meals);
// console.log(meals);
// console.log(scapegoat);
// isMeals(scapegoat);
// console.log(meals);
// console.log(scapegoat);

// // { breakfast: "a vegetable salad", lunch: "a cod's meuniere", dinner: "a half bottle of wine (white)" }
// // { breakfast: "a vegetable salad", lunch: "a cod's meuniere", dinner: "a half bottle of wine (white)" }
// // { breakfast: "a vegetable salad", lunch: "a cod's meuniere", dinner: "a half bottle of wine (white)" }
// // { breakfast: "a beef steak", lunch: "a bucket of ice cream", dinner: "3 pizzas" }

// type NestObject = {
//   nest: object;
// };
// const object1: NestObject = {
//   nest: {},
// };
// const object2: NestObject = shallowCopy(object1);
// console.log(object1 === object2); // false
// console.log(object1.nest === object2.nest); // true

// const shallowCopied: object = { ...sample };

// const sample: object = {
//   year: 1999,
//   month: 7,
// };
// const shallowCopied: object = { ...sample };

// const map1 = new Map([
//   [".js", "JS"],
//   [".ts", "TS"],
// ]);
// const map2 = new Map(map1);
// // 要素は同一だが、Mapインスタンスは異なる
// console.log(map2);
// console.log(map1 !== map2); // true

// const set1 = new Set([1, 2, 3]);
// const set2 = new Set(set1);
// // 要素は同一だが、Setのインスタンスは異なる
// console.log(set2);
// console.log(set1 !== set2);

// const array1 = [1, 2, 3];
// const array2 = [...array1];
