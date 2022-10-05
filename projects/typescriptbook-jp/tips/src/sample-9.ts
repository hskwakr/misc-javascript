/* ================================= */
/* generates type                    */
/* from object array                 */
/* ================================= */

// const currencies = ["CNY", "EUR", "GBP", "JPY", "KRW", "USD"];

// type Currency = "CNY" | "EUR" | "GBP" | "JPY" | "KRW" | "USD";

// const currencies = ["CNY", "EUR", "GBP", "JPY", "KRW", "USD"];
// type Currency = typeof currencies;
// // type Currency = string[]

// const currencies = ["CNY", "EUR", "GBP", "JPY", "KRW", "USD"] as const;
// type Currency = typeof currencies;
// // type Currency = readonly ["CNY", "EUR", "GBP", "JPY", "KRW", "USD"]

// type Currency = typeof currencies[0] | typeof currencies[1] | typeof currencies[2] | ....

// const currencies = ["CNY", "EUR", "GBP", "JPY", "KRW", "USD"] as const;
// type Currency = typeof currencies[number];
