/* ================================= */
/* get a subset of an object         */
/* ================================= */

// const profile = {
//   name: "suin",
//   twitter: "suin",
//   github: "suin",
//   country: "JP",
//   prefecture: "東京都",
//   city: "千代田区",
//   address: "丸の内2-4-1",
//   building: "丸ビル",
//   zipcode: "100-6390",
// };

// 上の9つプロパティを持つオブジェクトから、下の6つのプロパティだけを抽出したオブジェクトを得たい

// const address = {
//   country: "JP",
//   prefecture: "東京都",
//   city: "千代田区",
//   address: "丸の内2-4-1",
//   building: "丸ビル",
//   zipcode: "100-6390",
// };

// const sns = (({ twitter, github }) => ({ twitter, github }))(profile);
// console.log(sns);

// const address = (({
//   name,
//   twitter,
//   github,
//   ...rest
// }) => rest)(profile);
// console.log(address);

// const address = { ...profile };
// delete address.name;
// // The operand of a 'delete' operator must be optional.

// import _ from "lodash";
// const sns = _.pick(profile, ["twitter", "github"]);
// //=> {
// //   "twitter": "suin",
// //   "github": "suin"
// // }

// import pick from "lodash.pick";
// const sns = pick(profile, ["twitter", "github"]);

// import _ from "lodash";
// const address = _.omit(profile, ["name", "twitter", "github"]);
// //=> {
// //   "country": "JP",
// //   "prefecture": "東京都",
// //   "city": "千代田区",
// //   "address": "丸の内2-4-1",
// //   "building": "丸ビル",
// //   "zipcode": "100-6390"
// // }
